import { Request, Response } from 'express';
import { AppDataSource } from 'src/database/data-source';
import { User } from '@entities/User';
const userRepository = AppDataSource.getRepository(User)

class AuthController {
    static showFormRegister(req: Request, res: Response) {
        res.render('auth/register.ejs');
    }

    static async register(req: Request, res: Response) {
        const {email, password, confirmPassword} = req.body;
        const u: User = new User();
        u.email = email;
        u.password = password;
        u.isActive = true;
        // use DataMaper
        await userRepository.save(u);
        res.end("Register success");
    }
}

export default AuthController;