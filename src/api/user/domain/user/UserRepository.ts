import { User } from './User';
import { UserId } from './UserId';
import { IGenericRepository } from '../../../domain/generic/IGenericRepository';

export const UserRepositoryKey = 'UserRepository';

export type IUserRepository = IGenericRepository<User, UserId>;
