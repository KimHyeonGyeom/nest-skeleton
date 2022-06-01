import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { AutoGenerateAttribute } from '@typedorm/common';
import { RootTypeOrmEntity } from '../../../../../domain/typeorm/RootTypeOrmEntity';
import { User } from '@user/infra/persistence/entity/user.model';
import { Product } from '../../../../product/infra/persistence/entity/product.model';

@Entity('orders')
export class Order extends RootTypeOrmEntity {
  @Column()
  user_id: number;

  @Column()
  product_id: number;

  @Column({ length: 64 })
  address: string;

  @ManyToOne(() => User, (User) => User.order)
  user: User;

  @ManyToOne(() => Product, (Product) => Product.order)
  product: Product;
}
