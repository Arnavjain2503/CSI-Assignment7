// src/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import productRoutes from './routes/product.routes.js';
import authRoutes from './auth/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Public routes for authentication
app.use('/api/auth', authRoutes);

// Protected routes for products
app.use('/api/products', productRoutes);

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
