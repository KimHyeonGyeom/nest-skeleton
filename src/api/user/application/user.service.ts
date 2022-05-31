import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryWrapper } from '@user/infra/persistence/repository/user.repository';
import { CreateUserCommand } from '@user/application/createUser/CreateUserCommand';
import {
  getEntityManagerOrTransactionManager,
  Transactional,
} from 'typeorm-transactional-cls-hooked';
import { getManager } from 'typeorm';
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
    const ss = getManager();
    const sd = getEntityManagerOrTransactionManager(
      '__typeOrm___cls_hooked_tx_namespace',
      ss,
    );
    const user = await this.userRepository.createUser(name, password);
  }
}
