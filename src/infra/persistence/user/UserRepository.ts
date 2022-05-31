import { v1 as uuidv1 } from 'uuid';
import { Inject, Injectable } from '@nestjs/common';

import { GenericTypeOrmRepo } from '../generic/typeorm/GenericTypeOrmRepo';
import { UserRootEntity } from './UserRootEntity';
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

@Injectable()
export class UserRepository extends GenericTypeOrmRepo<
  User,
  UserId,
  UserRootEntity
> {
  constructor(
    @Inject(UserEntityMapper) mapper: UserEntityMapper,
    @InjectRepository(UserRootEntity)
    private readonly userRepository: Repository<UserRootEntity>,
  ) {
    super(mapper);
  }

  nextId(): UserId {
    return new UserId(uuidv1());
  }
}
