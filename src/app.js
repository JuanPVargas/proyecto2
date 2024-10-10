import express from 'express';
import morgan from 'morgan';


//servidor
const app = express();

app.use(morgan('dev'));

export default app;