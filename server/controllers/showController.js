import axios from "axios";
import Movie from "../models/Movie.js";
import Show from "../models/Show.js"; // Capitalized for consistency

// API to get now playing movies from TMDB API
export const getNowPlayingMovies = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
      }
    );

    const movies = response.data.results;
    res.json({ success: true, movies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// API to add a new show to the database
export const addShow = async (req, res) => {
  try {
    const { movieId, showsInput, showPrice } = req.body;

    if (
      !movieId ||
      !Array.isArray(showsInput) ||
      showsInput.length === 0 ||
      !showPrice
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    let movie = await Movie.findById(movieId);

    if (!movie) {
      // Fetch movie details and credits from TMDB API
      const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
        }),
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
        }),
      ]);

      const movieApiData = movieDetailsResponse.data;
      const movieCreditsData = movieCreditsResponse.data;

      const movieDetails = {
        _id: movieId,
        title: movieApiData.title,
        overview: movieApiData.overview,
        poster_path: movieApiData.poster_path,
        backdrop_path: movieApiData.backdrop_path,
        release_date: movieApiData.release_date,
        original_language: movieApiData.original_language,
        tagline: movieApiData.tagline || "",
        genres: movieApiData.genres,
        casts: movieCreditsData.cast,
        vote_average: movieApiData.vote_average,
        runtime: movieApiData.runtime,
      };

      // Add movie to the database
      movie = await Movie.create(movieDetails);
    }

    const showsToCreate = [];

    showsInput.forEach(({ date, time }) => {
      if (!date || !Array.isArray(time)) return; // skip invalid entries

      time.forEach((t) => {
        // Normalize time string (e.g., "14:00" → "14:00:00")
        const timeWithSeconds = t.length === 5 ? t + ":00" : t;
        const dateTimeString = `${date}T${timeWithSeconds}`;
        const showDateTime = new Date(dateTimeString);

        if (!isNaN(showDateTime.getTime())) {
          showsToCreate.push({
            movie: movieId,
            showDateTime,
            showPrice,
            occupiedSeats: {},
          });
        }
      });
    });

    if (showsToCreate.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No valid show dates or times provided",
      });
    }

    await Show.insertMany(showsToCreate);

    res.json({ success: true, message: "Event added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// API to get all shows from the database
export const getShows = async (req, res) => {
  try {
    const shows = await Show.find({ showDateTime: { $gte: new Date() } })
      .populate("movie")
      .sort({ showDateTime: 1 });

    // Filter unique shows by movie ID (one show per movie)
    const uniqueShowsMap = new Map();
    shows.forEach((show) => {
      const movieId = show.movie._id.toString();
      if (!uniqueShowsMap.has(movieId)) {
        uniqueShowsMap.set(movieId, show);
      }
    });

    res.json({ success: true, shows: Array.from(uniqueShowsMap.values()) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// API to get a single show from the database
export const getShow = async (req, res) => {
  try {
    const { movieId } = req.params;

    if (!movieId) {
      return res
        .status(400)
        .json({ success: false, message: "movieId parameter is required" });
    }

    // get all upcoming shows for the movie
    const shows = await Show.find({
      movie: movieId,
      showDateTime: { $gte: new Date() },
    }).sort({ showDateTime: 1 });

    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }

    // Group showtimes by date
    const dateTime = {};
    shows.forEach((show) => {
      const date = show.showDateTime.toISOString().split("T")[0];
      if (!dateTime[date]) {
        dateTime[date] = [];
      }
      // Format time as "HH:mm"
      const timeStr = show.showDateTime
        .toISOString()
        .split("T")[1]
        .substring(0, 5);
      dateTime[date].push({ time: timeStr, showId: show._id });
    });

    // Convert dateTime object to showsInput array to match expected format
    const showsInput = Object.entries(dateTime).map(([date, times]) => ({
      date,
      time: times.map((t) => t.time),
    }));

    res.json({ success: true, movie, showsInput });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
