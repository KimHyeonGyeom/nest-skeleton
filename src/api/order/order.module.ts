import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './interface/order.controller';
import { OrderRepository } from './infra/persistence/repository/order.repository';
import { OrderService } from './application/order.service';
import { OrderEntityMapper } from './infra/OrderEntityMapper';
import { OrderModel } from './infra/persistence/entity/order.model';

const services = [OrderService];
const controllers = [OrderController];

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([OrderModel])],
  controllers,
  providers: [
    OrderEntityMapper,
    ...services,
    { provide: 'OrderRepository', useClass: OrderRepository },
  ],
  exports: [TypeOrmModule],
})
export class OrderModule {}
