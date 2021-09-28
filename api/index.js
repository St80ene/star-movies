import express from 'express';
// eslint-disable-next-line import/extensions
import v1 from './v1/routes/index.js';

const router = express.Router();

router.use('/v1', v1);

export default router;
