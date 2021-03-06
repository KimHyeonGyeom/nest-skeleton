import { Order } from './Order';
import { IGenericRepository } from '../../../../domain/generic/IGenericRepository';
import { OrderRepository } from '../../infra/persistence/repository/order.repository';

export const OrderRepositoryKey = 'OrderRepository';

export type IOrderRepository = IGenericRepository<Order, number> &
  OrderRepository;
