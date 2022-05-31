import { Inject, Injectable } from '@nestjs/common';

import { CreateUserCommand } from './createUser/CreateUserCommand';

import {
  IUserRepository,
  UserRepositoryKey,
} from '../../domain/domain/user/UserRepository';
import { User } from '../../domain/domain/user/User';
import { UserRepository } from '../../infra/persistence/user/UserRepository';
//import {  } from '../../infra/persistence/user/UserRootEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserId } from '../../domain/domain/user/UserId';
import {
  getEntityManagerOrTransactionManager,
  Transactional,
} from 'typeorm-transactional-cls-hooked';
import { getManager } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryKey)
    private readonly userRepository: IUserRepository,
  ) {}

  @Transactional()
  async createUser(command: CreateUserCommand) {
    const { name, password } = command;

    // const user = User.create({
    //   id: new,
    //   name,
    //   password,
    // });
    const user = {
      id: '123',
      name,
      password,
    };
    const ss = getManager();
    const sd = getEntityManagerOrTransactionManager(
      '__typeOrm___cls_hooked_tx_namespace',
      ss,
    );
    await sd.getRepository('User').save(user);
    //await this.userRepository.save(user);
  }
}
