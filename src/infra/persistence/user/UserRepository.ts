import { v1 as uuidv1 } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';

import { GenericTypeOrmRepo } from '../generic/typeorm/GenericTypeOrmRepo';
import { User as asd } from './UserRootEntity';
import { UserEntityMapper } from './UserEntityMapper';
import { User } from '../../../domain/domain/user/User';
import { UserId } from '../../../domain/domain/user/UserId';
import { Transactional } from '../../../core/database/typeorm/Transactional';
import {
  IUserRepository,
  UserRepositoryKey,
} from '../../../domain/domain/user/UserRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';

@Injectable()
export class UserRepository extends GenericTypeOrmRepo<User, UserId, asd> {
  constructor(
    @Inject(UserEntityMapper) mapper: UserEntityMapper,
    @InjectRepository(asd) asd: BaseRepository<asd>,
  ) {
    super(mapper);
  }

  nextId(): UserId {
    return new UserId(uuidv1());
  }
}
