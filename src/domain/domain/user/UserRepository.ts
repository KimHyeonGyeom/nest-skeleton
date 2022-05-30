import { IGenericRepository } from '../generic/IGenericRepository';
import { User } from './User';
import { UserId } from './UserId';

export const UserRepositoryKey = 'UserRepository';

export type IUserRepository = IGenericRepository<User, UserId>;
