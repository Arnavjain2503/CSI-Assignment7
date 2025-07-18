// src/routes/product.routes.js
import { Router } from 'express';
import { verifyToken } from '../auth/verifyToken.js';
import * as controller from '../controllers/product.controller.js';

const router = Router();

// Protected routes using JWT verification
router.get('/', verifyToken, controller.getAll);
router.get('/:id', verifyToken, controller.getOne);
router.post('/', verifyToken, controller.create);
router.put('/:id', verifyToken, controller.update);
router.delete('/:id', verifyToken, controller.remove);

export default router;
