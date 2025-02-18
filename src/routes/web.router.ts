import express, { Router } from 'express';
import HomeController from '@controllers/home.controller';
import AuthController from '@controllers/auth.controller';
import UserController from '@controllers/user.controller';
import { checkAuth } from 'src/middlewares/auth.midd';
import { checkPermission } from 'src/middlewares/permission.midd';
import TokenController from '@controllers/token.controller';

const router: Router = express.Router();

router.get('/home',checkAuth, HomeController.index);
router.get('/register', AuthController.showFormRegister);
router.post('/register', AuthController.register);
router.get('/login', AuthController.showFormLogin);
router.post('/login', AuthController.login);
router.get('/users',checkAuth, UserController.index);
router.get('/users/:id/delete',checkAuth, checkPermission, UserController.delete);
router.get('/logout', checkAuth, AuthController.logout);
router.get('/users/create', checkAuth, checkPermission, UserController.showFormCreate);
router.post('/users/store', checkAuth, checkPermission, UserController.createUser);
router.get('/users/:id/edit', checkAuth, checkPermission, UserController.showFormEdit);
router.post('/users/:id/edit', checkAuth, checkPermission, UserController.editUser);

router.get('/api-keys',checkAuth, TokenController.index);
router.post('/api-keys/store',checkAuth, TokenController.store);
router.get('/api-keys/:id/delete',checkAuth, TokenController.deleteToken);
router.get('/get-my-tokens', TokenController.getAllTokens)

export default router;