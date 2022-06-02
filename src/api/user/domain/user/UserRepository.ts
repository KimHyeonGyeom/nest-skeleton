import { User } from './User';
import { IGenericRepository } from '../../../../domain/generic/IGenericRepository';

export const UserRepositoryKey = 'UserRepository';

export type IUserRepository = IGenericRepository<User, number>;
