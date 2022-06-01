import { Inject, Injectable } from '@nestjs/common';

import { Transactional } from 'typeorm-transactional-cls-hooked';

import {
  IProductRepository,
  ProductRepositoryKey,
} from '../domain/product/ProductRepository';
import { Product } from '../domain/product/Product';
import { CreateProductCommand } from './command/CreateProductCommand';

@Injectable()
export class ProductService {
  constructor(
    @Inject(ProductRepositoryKey)
    private readonly productRepository: IProductRepository,
  ) {}

  async getProduct(id: number) {
    const user = await this.productRepository.findOne(id);

    return user;
  }

  @Transactional()
  async createProduct(command: CreateProductCommand) {
    const { name, price } = command;

    const product = Product.create({
      name,
      price,
    });

    const user = await this.productRepository.save(product);
  }

  @Transactional()
  async deleteProduct(id: number) {
    const user = await this.productRepository.remove(id);

    return user;
  }

  @Transactional()
  async updateProduct(id: number, body: any) {
    const product = Product.create({
      name: body.name,
      price: body.price,
    });

    const user = await this.productRepository.update(id, product);

    return user;
  }
}
