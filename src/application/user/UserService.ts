import { Inject, Injectable } from '@nestjs/common';
import { Transactional } from 'src/core/database/typeorm/Transactional';

import { CreateUserCommand } from './createUser/CreateUserCommand';

import {
  IUserRepository,
  UserRepositoryKey,
} from '../../domain/domain/user/UserRepository';
import { User } from '../../domain/domain/user/User';
import { UserRepository } from '../../infra/persistence/user/UserRepository';
import { UserRootEntity } from '../../infra/persistence/user/UserRootEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserId } from '../../domain/domain/user/UserId';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryKey)
    private readonly userRepository: IUserRepository,
  ) {}

  //@Transactional()
  async createUser(command: CreateUserCommand) {
    const { name, password } = command;

    const user = User.create({
      id: this.userRepository.nextId(),
      name,
      password,
    });

    await this.userRepository.save(user);
  }
}
