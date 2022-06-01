import { Inject, Injectable } from '@nestjs/common';
import { GenericTypeOrmRepo } from '../../../../../domain/typeorm/GenericTypeOrmRepo';

import { OrderEntityMapper } from '../../OrderEntityMapper';
import { Order } from '../../../domain/order/Order';
import { OrderRootEntity } from '../../OrderRootEntity';
import { OrderRepositoryKey } from '../../../domain/order/OrderRepository';
import { FindOneOptions } from 'typeorm';

@Injectable()
@Reflect.metadata(OrderRepositoryKey, 'Order')
export class OrderRepository extends GenericTypeOrmRepo<
  Order,
  OrderRootEntity
> {
  constructor(@Inject(OrderEntityMapper) mapper: OrderEntityMapper) {
    super(mapper);
  }

  async findOne(id: number): Promise<any> {
    const findOption: FindOneOptions = { where: { id } };

    const repository = this.getTypeOrmRepository();
    const entity = await repository
      .createQueryBuilder('orders')
      .select(['orders.id', 'orders.user_id', 'users.id', 'users.name'])
      .innerJoin('orders.user', 'users', 'users.id = orders.user_id')
      .where('orders.id = :id', { id })
      .getOne();
    //
    // if (!entity) {
    //   return null;
    // }
    //
    // return this.mapper.toAggregate(entity);
    return entity;
  }
}
