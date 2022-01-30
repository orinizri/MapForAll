import express from 'express';
import { getAllPlaces } from '../controllers/controllers.js';

const placesRouter = express.Router();

placesRouter.get('/places' , getAllPlaces)

export { placesRouter };