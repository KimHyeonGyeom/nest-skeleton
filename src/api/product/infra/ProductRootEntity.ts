import { Column } from 'typeorm';
import { RootTypeOrmEntity } from '../../../domain/typeorm/RootTypeOrmEntity';

export class ProductRootEntity extends RootTypeOrmEntity {
  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'int', length: 512 })
  price: number;
}
