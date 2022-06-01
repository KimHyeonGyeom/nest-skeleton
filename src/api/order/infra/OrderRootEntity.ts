import { Column } from 'typeorm';
import { RootTypeOrmEntity } from '../../../domain/typeorm/RootTypeOrmEntity';

export class OrderRootEntity extends RootTypeOrmEntity {
  @Column({ type: 'bigint' })
  user_id: number;

  @Column({ type: 'bigint' })
  product_id: number;

  @Column({ type: 'varchar', length: 64 })
  address: string;
}
