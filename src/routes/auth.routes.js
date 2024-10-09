import {Routes} from 'express';
import {login, register} from '../controllers/auth.controller.js';

const router = Routes();

router.post('/register', register);

router.post('/login', login);

export default router