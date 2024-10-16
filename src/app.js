import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js'

//servidor
const app = express();

app.use(morgan('dev'));

app.use(authRoutes);

export default app;