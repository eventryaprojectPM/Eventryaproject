import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  dummyDateTimeData,
  dummyShowsData,
  dummyTrailers,
} from "../assets/assets";
import BlurCircle from "../Components/BlurCircle";
import timeFormat from "../lib/timeFormat";
import { StarIcon } from "@heroicons/react/24/solid";
import { Heart, PlayCircleIcon, X } from "lucide-react";
import DateSelect from "../Components/DateSelect";
import Loading from "../Components/Loading";
import MovieCard from "../Components/MovieCard";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [currentTrailer, setCurrentTrailer] = useState(null);

  // Fetch show and trailer
  const getShow = async () => {
    const selectedShow = dummyShowsData.find((s) => s._id === id);
    if (selectedShow) {
      setShow({
        movie: selectedShow,
        dateTime: dummyDateTimeData,
      });

      // Find trailer for this movie
      const trailer = dummyTrailers.find((t) => t.movieId === selectedShow._id);
      if (trailer) setCurrentTrailer(trailer);
    }
  };

  useEffect(() => {
    getShow();
  }, [id]);

  const handleFavorite = () => setIsFavorite((prev) => !prev);
  const handleWatchTrailer = () => currentTrailer && setIsTrailerOpen(true);
  const handleCloseTrailer = () => setIsTrailerOpen(false);
 


  if (!show) return <Loading />;

  return (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">
      {/* Movie Details */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />
        <div className="relative flex flex-col gap-3">
          <BlurCircle top="-100px" left="-100px" />
          <p className="text-yellow-200">ENGLISH</p>
          <h1 className="text-4xl font-semibold max-w-96 text-balance">
            {show.movie.title}
          </h1>
          <div className="flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {show.movie.overview}
          </p>
          <p>
            {timeFormat(show.movie.runtime)} .{" "}
            {show.movie.genres.map((genre) => genre.name).join(", ")} .{" "}
            {show.movie.release_date.split("-")[0]}
          </p>
          <div className="flex items-center flex-wrap gap-4 mt-4">
            <button
              onClick={handleWatchTrailer}
              className="flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95"
            >
              <PlayCircleIcon className="w-5 h-5" />
              View Event Preview
            </button>
            <a
              href="#dateSelect"
              className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer active:scale-95"
            >
              Buy Tickets
            </a>
            <button
              onClick={handleFavorite}
              className="bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95"
            >
              <Heart
                className={`w-5 h-5 ${
                  isFavorite ? "fill-primary text-primary" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Cast */}
      <p className="text-lg font-medium mt-20">Your Favorite Cast</p>
      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={cast.profile_path}
                alt={cast.name}
                className="rounded-full h-20 md:h-20 aspect-square object-cover"
              />
              <p className="font-medium text-xs mt-3">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Date Select */}
      <DateSelect dateTime={show.dateTime} id={id} />

      {/* Recommendations */}
      <p className="text-lg font-medium mt-20 mb-8">You May Also Like</p>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {/* Show More */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>

      {/* Trailer Modal */}
      {isTrailerOpen && currentTrailer && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full max-w-2xl mx-4 md:mx-0">
            <button
              onClick={handleCloseTrailer}
              className="absolute top-3 right-3 bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src={currentTrailer.videoUrl}
              controls
              autoPlay
              className="w-full max-h-[500px] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
