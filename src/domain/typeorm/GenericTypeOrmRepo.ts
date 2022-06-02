import { FindOneOptions, getManager, Repository } from 'typeorm';
import { Type } from '@nestjs/common';
import { AggregateRoot } from '../generic/AggregateRoot';
import { RootTypeOrmEntity } from './RootTypeOrmEntity';
import { IGenericRepository } from '../generic/IGenericRepository';
import { EntityMapper } from '../EntityMapper';
import { getEntityManagerOrTransactionManager } from 'typeorm-transactional-cls-hooked';

export abstract class GenericTypeOrmRepo<
  TAgg extends AggregateRoot<number>,
  TDalEntity extends RootTypeOrmEntity,
> implements IGenericRepository<TAgg, number>
{
  constructor(private readonly mapper: EntityMapper<TAgg, TDalEntity>) {}

  async findOne(id: number): Promise<TAgg | null> {
    const findOption: FindOneOptions = { where: { id } };

    const repository = this.getTypeOrmRepository();
    const entity = await repository.findOne(findOption);

    if (!entity) {
      return null;
    }

    return this.mapper.toAggregate(entity);
  }

  async save(aggregate: TAgg): Promise<void> {
    const dalEntity = this.mapper.toDalEntity(aggregate);
    await this.getTypeOrmRepository().save(dalEntity);
  }

  async update(id: number, aggregate: TAgg): Promise<void | null> {
    const findOption: FindOneOptions = { where: { id } };

    const repository = this.getTypeOrmRepository();
    const entity = await repository.findOne(findOption);

    if (!entity) {
      return null;
    }

    const dalEntity = this.mapper.toDalEntity(aggregate);
    delete dalEntity.createdAt;

    await repository.update(id, dalEntity as any);
  }

  async remove(id: number): Promise<void | null> {
    const findOption: FindOneOptions = { where: { id } };

    const repository = this.getTypeOrmRepository();
    const entity = await repository.findOne(findOption);

    if (!entity) {
      return null;
    }

    await repository.softDelete(entity.id);
  }

  private getEntityType(): Type<TDalEntity> {
    return Reflect.getMetadata(this.constructor.name, this.constructor);
  }

  protected getTypeOrmRepository(): Repository<TDalEntity> {
    return getEntityManagerOrTransactionManager(
      '__typeOrm___cls_hooked_tx_namespace',
      getManager(),
    ).getRepository(this.getEntityType());
  }
}
