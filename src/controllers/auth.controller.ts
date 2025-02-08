import { Request, Response } from 'express';
import AuthService from '@services/auth.service';

class AuthController {
    static showFormRegister(req: Request, res: Response) {
        res.render('auth/register.ejs');
    }

    static showFormLogin(req: Request, res: Response) {
        res.render('auth/login.ejs');
    }

    static async register(req: Request, res: Response) {
        await AuthService.regisierUser(req.body)
        res.redirect('/login');
    }

    static async login(req: any, res: Response) {
        const account = await AuthService.checkAccount(req.body);
        if (!account) {
            res.redirect('/login');
            return;
        }
        req.session.userLogin = account;
        res.redirect('/home');
    }

    static logout(req: Request, res: Response) {
        req.session.destroy(() => {
            res.redirect('/login');
        });
    }
}

export default AuthController;