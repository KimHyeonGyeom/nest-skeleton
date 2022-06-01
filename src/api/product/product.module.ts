import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './interface/product.controller';
import { Product } from './infra/persistence/entity/product.model';
import { ProductRepository } from './infra/persistence/repository/product.repository';
import { ProductService } from './application/product.service';
import { ProductEntityMapper } from './infra/ProductEntityMapper';

const services = [ProductService];
const controllers = [ProductController];

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Product])],
  controllers,
  providers: [
    ProductEntityMapper,
    ...services,
    { provide: 'ProductRepository', useClass: ProductRepository },
  ],
  exports: [TypeOrmModule],
})
export class ProductModule {}
