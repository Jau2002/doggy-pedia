import { Router } from 'express';
import dogsRoutes from './dogs.routes.js';
import monitoredRoutes from './monitored.routes.js';
import temperamentsRoutes from './temperaments.routes.js';

const RootRoute = Router();

RootRoute.use('/dogs', dogsRoutes);

RootRoute.use('/temperaments', temperamentsRoutes);

RootRoute.use('/health', monitoredRoutes);

export default RootRoute;
