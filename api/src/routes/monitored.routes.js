import { Router } from 'express';
import getHealth from '../controllers/getHealth.js';

const monitoredRoutes = Router();

monitoredRoutes.get('/', getHealth);

export default monitoredRoutes;
