import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { CreateUserDto } from '../dtos/createUser.dto';

class UserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const createUserDto: CreateUserDto = req.body;
      const user = await UserService.createUser(createUserDto);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
    }
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  }

}

export default new UserController();
