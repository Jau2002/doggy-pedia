import { Router } from 'express';
import dogsRoutes from './dogs.routes.js';

const router = Router();

router.use('dogs', dogsRoutes);

export default router;
