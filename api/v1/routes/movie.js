/* eslint-disable import/extensions */
import express from 'express';
import { getMovies } from '../controllers/movie.js';

const router = express.Router();

router.get(
  '/', getMovies
);
export default router;
