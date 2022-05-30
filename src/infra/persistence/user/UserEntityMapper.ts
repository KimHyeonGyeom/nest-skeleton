import { Injectable } from '@nestjs/common';

import { EntityMapper } from '../generic/EntityMapper';
import { UserRootEntity } from './UserRootEntity';
import { User } from '../../../domain/domain/user/User';
import { UserId } from '../../../domain/domain/user/UserId';

@Injectable()
export class UserEntityMapper extends EntityMapper<
  User,
  UserId,
  UserRootEntity
> {
  toAggregate(dalEntity: UserRootEntity): User {
    const { id, name, password, createdAt, updatedAt, deletedAt } = dalEntity;

    return new User(
      new UserId(id),
      name,
      password,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }

  toDalEntity(aggregate: User): UserRootEntity {
    const rootDalEntity = new UserRootEntity();
    rootDalEntity.id = aggregate.id.key;
    rootDalEntity.name = aggregate.getName();
    rootDalEntity.password = aggregate.getPassword();
    rootDalEntity.createdAt = aggregate.getCreatedAt();
    rootDalEntity.updatedAt = aggregate.getUpdatedAt();
    rootDalEntity.deletedAt = aggregate.getDeletedAt();

    return rootDalEntity;
  }
}
