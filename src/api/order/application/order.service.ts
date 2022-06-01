import { Inject, Injectable } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import {
  IOrderRepository,
  OrderRepositoryKey,
} from '../domain/order/OrderRepository';
import { Order } from '../domain/order/Order';
import { CreateOrderCommand } from './command/CreateOrderCommand';

@Injectable()
export class OrderService {
  constructor(
    @Inject(OrderRepositoryKey)
    private readonly orderRepository: IOrderRepository,
  ) {}

  async getOrder(id: number) {
    const user = await this.orderRepository.findOne(id);

    return user;
  }

  @Transactional()
  async createOrder(command: CreateOrderCommand) {
    const { user_id, product_id, address } = command;

    const order = Order.create({
      user_id,
      product_id,
      address,
    });

    const user = await this.orderRepository.save(order);
  }

  @Transactional()
  async deleteOrder(id: number) {
    const order = await this.orderRepository.remove(id);

    return order;
  }

  @Transactional()
  async updateOrder(id: number, body: any) {
    const order = Order.create({
      user_id: body.user_id,
      product_id: body.product_id,
      address: body.address,
    });

    const user = await this.orderRepository.update(id, order);

    return user;
  }
}
