import { User } from "@entities/User";
import { AppDataSource } from "@database/data-source";
const userRepository = AppDataSource.getRepository(User)

class AuthService {
    static async regisierUser(data: any): Promise<any>  {
        const {email, password, confirmPassword} = data;
        const u: User = new User();
        u.email = email;
        u.password = password;
        u.isActive = true;
        // use DataMaper
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