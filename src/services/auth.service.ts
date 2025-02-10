import { User } from "@entities/User";
import { Role } from "@entities/Role";
import { AppDataSource } from "@database/data-source";
const userRepository = AppDataSource.getRepository(User);
const roleRepository = AppDataSource.getRepository(Role);

class AuthService {
    static async regisierUser(data: any): Promise<any>  {
        const {email, password, confirmPassword} = data;
        const u: User = new User();
        u.email = email;
        u.password = password;
        u.isActive = true;
        // use DataMaper
        const roleUser : any = await roleRepository.findOne({
            where: {
                id: 2
            }
        })
        if (roleUser) {
            u.role = roleUser;
        }
        await userRepository.save(u);
    }

    static async checkAccount(data: any): Promise<any> {
        const {email, password} = data;
        const user = await userRepository.findOne({
            where: {
                email: email,
                password: password
            },
            relations: {
                role: true
            }
        });
        return user;
    }
}

export default AuthService;