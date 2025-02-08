import UserService from "@services/user.service";
import { Request, Response } from "express";
class UserController {
    static async index(req: Request, res: Response) {
        const users =  await UserService.getAllUsers();
        res.render('users/list.ejs', {users: users});
    }

    static async delete(req: any, res: Response) {
        UserService.deleteUser(req.params.id, req);
        res.redirect('/users');
    }
}

export default UserController;