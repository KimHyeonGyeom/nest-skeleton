import { Injectable } from '@nestjs/common';

import { UserRootEntity } from './UserRootEntity';

//import { UserId } from '@order/domain/order/UserId';
import { EntityMapper } from '../../../domain/EntityMapper';
import { User } from '../domain/user/User';

@Injectable()
export class UserEntityMapper extends EntityMapper<User, UserRootEntity> {
  toAggregate(dalEntity: UserRootEntity): User {
    const { id, name, password, createdAt, updatedAt, deletedAt } = dalEntity;

    return new User(
      id,
      name,
      password,
      createdAt,
      updatedAt,
      deletedAt,
    ).toString();
  }

  toDalEntity(aggregate: User): UserRootEntity {
    const rootDalEntity = new UserRootEntity();
    rootDalEntity.name = aggregate.name;
    rootDalEntity.password = aggregate.password;
    rootDalEntity.createdAt = aggregate.createdAt;
    rootDalEntity.updatedAt = aggregate.updatedAt;
    rootDalEntity.deletedAt = aggregate.deletedAt;

    return rootDalEntity;
  }
}
