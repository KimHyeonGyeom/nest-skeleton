import { AggregateRoot } from './AggregateRoot';

export interface IGenericRepository<
  TAgg extends AggregateRoot<number>,
  TId extends number,
> {
  findOne: (id: number) => Promise<TAgg | null>;
  save: (aggregate: TAgg) => Promise<void>;
  update: (id: number, aggregate: TAgg) => Promise<void | null>;
  remove: (id: number) => Promise<void | null>;
}
