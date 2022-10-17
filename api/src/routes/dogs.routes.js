import { Router } from 'express';
import getByParam from '../controllers/getByParam.js';
import getByQuery from '../controllers/getByQuery.js';
import postByBody from '../controllers/postByBody.js';

const dogsRoutes = Router();

dogsRoutes.get('/', getByQuery);

dogsRoutes.get('/:id', getByParam);

dogsRoutes.post('/', postByBody);

export default dogsRoutes;
