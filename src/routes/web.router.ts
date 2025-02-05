import express, { Router } from 'express';
import HomeController from '@controllers/home.controller';
import AuthController from '@controllers/auth.controller';

const router: Router = express.Router();

router.get('/home', HomeController.index);
router.get('/register', AuthController.showFormRegister);
router.post('/register', AuthController.register);

export default router;