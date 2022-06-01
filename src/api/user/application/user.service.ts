import { Inject, Injectable } from '@nestjs/common';

import { CreateUserCommand } from '@user/application/command/CreateUserCommand';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import {
  IUserRepository,
  UserRepositoryKey,
} from '@user/domain/user/UserRepository';
import { User } from '@user/domain/user/User';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryKey) private readonly userRepository: IUserRepository,
  ) {}

  async getUser(id: number) {
    const user = await this.userRepository.findOne(id);

    return user;
  }

  @Transactional()
  async createUser(command: CreateUserCommand) {
    const { name, password } = command;

    const users = User.create({
      name,
      password,
    });

    const user = await this.userRepository.save(users);
  }

  @Transactional()
  async deleteUser(id: number) {
    const user = await this.userRepository.remove(id);

    return user;
  }

  @Transactional()
  async updateUser(id: number, body: any) {
    const users = User.create({
      name: body.name,
      password: body.pasword,
    });

    const user = await this.userRepository.update(id, users);

    return user;
  }
}
