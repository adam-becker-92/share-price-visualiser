import express from 'express';
import shareRoutes from './shares';

const router = express.Router();
router.use('/shares', shareRoutes);

export default router;
