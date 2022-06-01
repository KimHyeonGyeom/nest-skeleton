import { Product } from './Product';
//import { UserId } from './UserId';
import { IGenericRepository } from '../../../../domain/generic/IGenericRepository';

export const ProductRepositoryKey = 'ProductRepository';

export type IProductRepository = IGenericRepository<Product, number>;
