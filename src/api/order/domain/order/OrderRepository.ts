import { Order } from './Order';
//import { UserId } from './UserId';
import { IGenericRepository } from '../../../../domain/generic/IGenericRepository';

export const OrderRepositoryKey = 'OrderRepository';

export type IOrderRepository = IGenericRepository<Order, number>;
