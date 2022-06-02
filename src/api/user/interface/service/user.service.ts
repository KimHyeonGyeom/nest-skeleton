import { CreateUserCommand } from '../../application/command/CreateUserCommand';

export interface UserService {
  getUser(id: number);
  createUser(command: CreateUserCommand);
  deleteUser(id: number);
  updateUser(id: number, body: any);
}
