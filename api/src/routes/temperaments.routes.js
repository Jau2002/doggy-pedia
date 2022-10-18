import { Router } from 'express';
import getTemperaments from '../controllers/getTemperaments.js';

const temperamentsRoutes = Router();

temperamentsRoutes.get('/', getTemperaments);

export default temperamentsRoutes;
