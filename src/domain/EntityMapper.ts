import { AggregateRoot } from './generic/AggregateRoot';
import { BaseEntity } from 'typeorm';

export abstract class EntityMapper<
  TAgg extends AggregateRoot<number>,
  TDalEntity extends BaseEntity,
> {
  abstract toAggregate(dalEntity: TDalEntity): TAgg;
  abstract toDalEntity(aggregate: TAgg): TDalEntity;
}
