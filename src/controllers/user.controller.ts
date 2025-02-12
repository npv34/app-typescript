import RoleService from "@services/role.service";
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

    static async showFormCreate(req: any, res: Response) {
        const roles = await RoleService.getAllRoles();
        res.render('users/create.ejs', {roles: roles});
    }

    static async createUser(req: any, res: Response) {
        await UserService.store(req.body);
        res.redirect('/users');
    }

    static async showFormEdit(req: any, res: Response) {
        const roles = await RoleService.getAllRoles();
        const userEdit = await UserService.findUseById(req.params.id);
        console.log(userEdit);
        res.render('users/edit.ejs', {roles: roles, userEdit: userEdit});
    }

    static async editUser(req: any, res: Response) {
        await UserService.edit(req.params.id, req.body);
        res.redirect('/users');
    }
}

export default UserController;