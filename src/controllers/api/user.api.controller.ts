import RoleService from "@services/role.service";
import UserService from "@services/user.service";

class UserAPIController {
    static async index(req: Request, res: any): Promise<any> {
        try {
            const users =  await UserService.getAllUsers();
            return res.json({status:'success', data: users});
        }catch (err: any) {
            return res.json({status:'error', message: err.message});
        }
    }

    static async findByID(req: any, res: any): Promise<any> {
        try {
            const {id} = req.params;
            const user = await UserService.findUseById(parseInt(id));
            if(!user) {
                return res.json({status:'not found', message: 'User not found'});
            }
            return res.json({status:'success', data: user});
        }catch (err: any) {
            return res.json({status:'error', message: err.message});
        }
    }

    static async delete(req: any, res: any) {
        try {
           await UserService.deleteUser(req.params.id, req);
           return res.json({status:'success', message: 'User deleted'});
        }catch (err: any) {
            return res.json({status:'error', message: err.message});
        }
    }
}

export default UserAPIController;