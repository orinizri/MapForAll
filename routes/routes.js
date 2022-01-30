import express from 'express';
import { getAllPlaces,getPlaceInfo } from '../controllers/controllers.js';

const placesRouter = express.Router();

placesRouter.get('/places' , getAllPlaces)
placesRouter.get('/place/:name' ,getPlaceInfo)

export { placesRouter };