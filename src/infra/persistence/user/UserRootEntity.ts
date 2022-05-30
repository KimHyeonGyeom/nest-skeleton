import { RootTypeOrmEntity } from '../generic/typeorm/RootTypeOrmEntity';
import { Entity } from '@typedorm/common';
import { Column } from 'typeorm';

@Entity({
  name: 'users',
  primaryKey: {
    partitionKey: 'Users#{id}',
  },
})
export class UserRootEntity extends RootTypeOrmEntity {
  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 512 })
  password: string;
}
