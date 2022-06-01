import { Inject, Injectable } from '@nestjs/common';
import { GenericTypeOrmRepo } from '../../../../../domain/typeorm/GenericTypeOrmRepo';
import { ProductRepositoryKey } from '../../../domain/product/ProductRepository';
import { ProductEntityMapper } from '../../ProductEntityMapper';
import { Product } from '../../../domain/product/Product';
import { ProductRootEntity } from '../../ProductRootEntity';

@Injectable()
@Reflect.metadata(ProductRepositoryKey, 'Product')
export class ProductRepository extends GenericTypeOrmRepo<
  Product,
  ProductRootEntity
> {
  constructor(@Inject(ProductEntityMapper) mapper: ProductEntityMapper) {
    super(mapper);
  }
}
