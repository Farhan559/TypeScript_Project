import User, { IUser } from '../models/user.model';
import { CreateUserDto } from '../dtos/createUser.dto';

class UserService {
  public async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = new User(createUserDto);
    return newUser.save();
  }

  public async getUsers(): Promise<IUser[]> {
    return User.find();
  }

  public async getUserById(userId: string): Promise<IUser | null> {
    return User.findById(userId);
  }

  public async updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null> {
    return User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  public async deleteUser(userId: string): Promise<IUser | null> {
    return User.findByIdAndDelete(userId);
  }
}

export default new UserService();
