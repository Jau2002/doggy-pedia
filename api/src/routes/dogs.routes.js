import { Router } from 'express';
import getByQuery from '../controllers/getByQuery.js';

const dogsRoutes = Router();

dogsRoutes.get('/', getByQuery);

export default dogsRoutes;
