import { User } from "@entities/User";
import { AppDataSource } from "@database/data-source";
import { Role } from "@entities/Role";
const userRepository = AppDataSource.getRepository(User)

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

}

export default UserService;