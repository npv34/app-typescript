import express, { Router } from 'express';
import HomeController from '@controllers/home.controller';

const router: Router = express.Router();

router.get('/home', HomeController.index);

export default router;