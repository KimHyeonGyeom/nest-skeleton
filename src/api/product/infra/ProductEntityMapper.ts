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
    rootDalEntity.name = aggregate.getName();
    rootDalEntity.price = aggregate.getPrice();
    rootDalEntity.createdAt = aggregate.getCreatedAt();
    rootDalEntity.updatedAt = aggregate.getUpdatedAt();
    rootDalEntity.deletedAt = aggregate.getDeletedAt();

    return rootDalEntity;
  }
}
