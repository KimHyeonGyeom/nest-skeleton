import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryWrapper } from '@user/infra/persistence/repository/user.repository';
import { CreateUserCommand } from '@user/application/createUser/CreateUserCommand';
import { Transactional } from 'typeorm-transactional-cls-hooked';
//import { Transactional } from 'src/core/database/typeorm/Transactional';
// import { User } from '../domain/User';
// import {
//   IUserRepository,
//   UserRepositoryKey,
// } from '../domain/UserRepository';
// import { CreateUserCommand } from './command/CreateUserCommand';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepositoryWrapper) {}

  @Transactional()
  async createUser(command: CreateUserCommand) {
    const { name, password } = command;

    const user = await this.userRepository.createUser(name, password);
  }
}
