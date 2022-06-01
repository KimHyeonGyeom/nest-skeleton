import { Injectable } from '@nestjs/common';
import { OrderRootEntity } from './OrderRootEntity';
import { EntityMapper } from '../../../domain/EntityMapper';
import { Order } from '../domain/order/Order';

@Injectable()
export class OrderEntityMapper extends EntityMapper<Order, OrderRootEntity> {
  toAggregate(dalEntity: OrderRootEntity): Order {
    const {
      id,
      user_id,
      product_id,
      address,
      createdAt,
      updatedAt,
      deletedAt,
    } = dalEntity;

    return new Order(
      id,
      user_id,
      product_id,
      address,
      createdAt,
      updatedAt,
      deletedAt,
    );
  }

  toDalEntity(aggregate: Order): OrderRootEntity {
    const rootDalEntity = new OrderRootEntity();
    rootDalEntity.user_id = aggregate.getUserId();
    rootDalEntity.product_id = aggregate.getProductId();
    rootDalEntity.address = aggregate.getAddress();
    rootDalEntity.createdAt = aggregate.getCreatedAt();
    rootDalEntity.updatedAt = aggregate.getUpdatedAt();
    rootDalEntity.deletedAt = aggregate.getDeletedAt();

    return rootDalEntity;
  }
}
