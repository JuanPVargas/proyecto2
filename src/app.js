import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';

//servidor
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());


app.use('/api', authRoutes);

export default app;