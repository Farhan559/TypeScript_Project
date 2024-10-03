import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { CreateUserDto } from '../dtos/createUser.dto';

class UserController {
  public createUser = async (req: Request, res: Response): Promise<Response> => {
    const createUserDto: CreateUserDto = req.body;
    const newUser = await UserService.createUser(createUserDto);
    return res.status(201).json(newUser);
  }

  public getUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
  }

  public getUserById = async (req: Request, res: Response): Promise<Response> => {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  }

  public updateUser = async (req: Request, res: Response): Promise<Response> => {
    const updatedUser = await UserService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(updatedUser);
  }

  public deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const deletedUser = await UserService.deleteUser(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(204).send();
  }
}

export default new UserController();
