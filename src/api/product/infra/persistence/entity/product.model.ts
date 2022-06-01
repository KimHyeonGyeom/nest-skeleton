import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { AutoGenerateAttribute } from '@typedorm/common';
import { RootTypeOrmEntity } from '../../../../../domain/typeorm/RootTypeOrmEntity';
import { Order } from '../../../../order/infra/persistence/entity/order.model';

@Entity('products')
export class Product extends RootTypeOrmEntity {
  @Column({ length: 64 })
  name: string;

  @Column({})
  price: number;

  @JoinColumn([{ name: 'id', referencedColumnName: 'product_id' }])
  order: Order;
}
