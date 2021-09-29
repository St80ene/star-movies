// /* eslint-disable import/extensions */
import express from 'express';
import MovieRoute from './movie.js';


const router = express.Router();

router.use('/movies', MovieRoute);


export default router;
