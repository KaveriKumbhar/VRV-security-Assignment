import express from 'express';
import { adminAction } from '../controllers/adminController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { authorizeRoles } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/action', authenticate, authorizeRoles(['admin']), adminAction);

export default router;
