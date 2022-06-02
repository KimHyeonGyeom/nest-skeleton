import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  JoinColumn,
} from 'typeorm';
import { RootTypeOrmEntity } from '../../../../../domain/typeorm/RootTypeOrmEntity';
import { OrderModel } from '../../../../order/infra/persistence/entity/order.model';

@Entity('users')
export class User extends RootTypeOrmEntity {
  @Column({ length: 64 })
  name: string;

  @Column({ length: 128 })
  password: string;

  @JoinColumn([{ name: 'id', referencedColumnName: 'user_id' }])
  order: OrderModel;
}
