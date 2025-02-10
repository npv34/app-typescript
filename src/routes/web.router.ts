import express, { Router } from 'express';
import HomeController from '@controllers/home.controller';
import AuthController from '@controllers/auth.controller';
import UserController from '@controllers/user.controller';
import { checkAuth } from 'src/middlewares/auth.midd';
import { checkPermission } from 'src/middlewares/permission.midd';

const router: Router = express.Router();

router.get('/home',checkAuth, HomeController.index);
router.get('/register', AuthController.showFormRegister);
router.post('/register', AuthController.register);
router.get('/login', AuthController.showFormLogin);
router.post('/login', AuthController.login);
router.get('/users',checkAuth, UserController.index);
router.get('/users/:id/delete',checkAuth, checkPermission, UserController.delete);
router.get('/logout', checkAuth, AuthController.logout);
router.get('/users/create', checkAuth, UserController.showFormCreate);
router.post('/users/store', checkAuth, UserController.createUser);


export default router;