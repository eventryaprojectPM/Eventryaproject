import express from "express";
import {
  getNowPlayingMovies,
  addShow,
  getShow,
  getShows,
} from "../controllers/showController.js";

const showRouter = express.Router();

showRouter.get("/now-playing", getNowPlayingMovies);
showRouter.post("/add", addShow);

// Use GET for fetching all shows
showRouter.get("/all", getShows);

// Use GET with movieId param to get show details
showRouter.get("/:movieId", getShow);

export default showRouter;
