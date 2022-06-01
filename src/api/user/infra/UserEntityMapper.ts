import { Injectable } from '@nestjs/common';

import { UserRootEntity } from './UserRootEntity';
import { User } from '@user/domain/user/User';
//import { UserId } from '@order/domain/order/UserId';
import { EntityMapper } from '../../../domain/EntityMapper';

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
    rootDalEntity.name = aggregate.getName();
    rootDalEntity.password = aggregate.getPassword();
    rootDalEntity.createdAt = aggregate.getCreatedAt();
    rootDalEntity.updatedAt = aggregate.getUpdatedAt();
    rootDalEntity.deletedAt = aggregate.getDeletedAt();

    return rootDalEntity;
  }
}
