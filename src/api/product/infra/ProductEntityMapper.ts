import { Injectable } from '@nestjs/common';
import { ProductRootEntity } from './ProductRootEntity';
import { EntityMapper } from '../../../domain/EntityMapper';
import { Product } from '../domain/product/Product';

@Injectable()
export class ProductEntityMapper extends EntityMapper<
  Product,
  ProductRootEntity
> {
  toAggregate(dalEntity: ProductRootEntity): Product {
    const { id, name, price, createdAt, updatedAt, deletedAt } = dalEntity;

    return new Product(id, name, price, createdAt, updatedAt, deletedAt);
  }

  toDalEntity(aggregate: Product): ProductRootEntity {
    const rootDalEntity = new ProductRootEntity();
    rootDalEntity.name = aggregate.name;
    rootDalEntity.price = aggregate.price;
    rootDalEntity.createdAt = aggregate.createdAt;
    rootDalEntity.updatedAt = aggregate.updatedAt;
    rootDalEntity.deletedAt = aggregate.deletedAt;

    return rootDalEntity;
  }
}
