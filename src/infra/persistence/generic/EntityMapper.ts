import { RootDalEntity } from './RootDalEntity';
import { AggregateRoot } from '../../../domain/domain/generic/AggregateRoot';
import { Identity } from '../../../domain/domain/generic/Identity';

export abstract class EntityMapper<
  TAgg extends AggregateRoot<TId>,
  TId extends Identity,
  TDalEntity extends RootDalEntity,
> {
  abstract toAggregate(dalEntity: TDalEntity): TAgg;
  abstract toDalEntity(aggregate: TAgg): TDalEntity;
}
