import { Injectable } from '@nestjs/common';
import { EntityMapper } from '../../../domain/EntityMapper';
import { OrderModel } from './persistence/entity/order.model';
import { Order } from '../domain/order/Order';

@Injectable()
export class OrderEntityMapper extends EntityMapper<Order, OrderModel> {
  toAggregate(dalEntity: OrderModel): Order {
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

  toDalEntity(aggregate: Order): OrderModel {
    const rootDalEntity = new OrderModel();
    rootDalEntity.user_id = aggregate.getUserId();
    rootDalEntity.product_id = aggregate.getProductId();
    rootDalEntity.address = aggregate.getAddress();
    rootDalEntity.createdAt = aggregate.createdAt;
    rootDalEntity.updatedAt = aggregate.updatedAt;
    rootDalEntity.deletedAt = aggregate.deletedAt;

    return rootDalEntity;
  }
}
