import { Inject, Injectable } from '@nestjs/common';
import { GenericTypeOrmRepo } from '../../../../../domain/typeorm/GenericTypeOrmRepo';
import { OrderEntityMapper } from '../../OrderEntityMapper';
import { Order } from '../../../domain/order/Order';
import { OrderRepositoryKey } from '../../../domain/order/OrderRepository';
import { OrderModel } from '../entity/order.model';

@Injectable()
@Reflect.metadata(OrderRepositoryKey, 'OrderModel')
export class OrderRepository extends GenericTypeOrmRepo<Order, OrderModel> {
  constructor(@Inject(OrderEntityMapper) mapper: OrderEntityMapper) {
    super(mapper);
  }

  public async findOrder(id: number): Promise<OrderModel | null> {
    const repository = this.getTypeOrmRepository();

    const entity = await repository
      .createQueryBuilder('orders')
      .select(['orders.id', 'orders.user_id', 'users.id', 'users.name'])
      .innerJoin('orders.user', 'users', 'users.id = orders.user_id')
      .where('orders.id = :id', { id })
      .getOne();

    return entity;
  }
}
