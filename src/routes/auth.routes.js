import express from 'express';
import {login, register} from '../controllers/auth.controller.js';

const router = express.Router(); // Aquí está la corrección

// Define tus rutas
router.post('/register', register);
router.post('/login', login);

export default router;

/*
import {Routes} from 'express';
import {login, register} from '../controllers/auth.controller.js';

const router = Routes();

router.post('/register', register);

router.post('/login', login);

export default router
*/