import { User } from "@entities/User";
import { AppDataSource } from "@database/data-source";
import { Role } from "@entities/Role";
const userRepository = AppDataSource.getRepository(User);
const roleRepository = AppDataSource.getRepository(Role);

class UserService {
    static async getAllUsers(): Promise<any> {
        return await userRepository.find({
            relations: {
                role: true
            }
        });
    }

    static async deleteUser(id: number, req: any): Promise<any> {
        const {userLogin } = req.session;
        if(userLogin.id !== id) {
            return await userRepository.delete(id);
        }
    }

    static async store(data: any): Promise<any> {
        const {email, password, roleId} = data;
        const u: User = new User();
        u.email = email;
        u.password = password;
        u.isActive = true;
        // use DataMaper
        const roleUser : any = await roleRepository.findOne({
            where: {
                id: roleId
            }
        })
        if (roleUser) {
            u.role = roleUser;
        }
        await userRepository.save(u);
    }

}

export default UserService;