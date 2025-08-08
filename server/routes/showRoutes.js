import express from "express";
import {
  getNowPlayingMovies,
  addShow,
  getShow,
  getShows,
} from "../controllers/showController.js";
import { protectAdmin } from "../middleware/auth.js";

const showRouter = express.Router();

showRouter.get("/now-playing",protectAdmin, getNowPlayingMovies);
showRouter.post("/add",protectAdmin, addShow);

// Use GET for fetching all shows
showRouter.get("/all", getShows);

// Use GET with movieId param to get show details
showRouter.get("/:movieId", getShow);

export default showRouter;
