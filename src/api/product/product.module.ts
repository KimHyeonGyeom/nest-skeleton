import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ProductController } from './interface/product.controller';
import { ProductRepository } from './infra/persistence/repository/product.repository';
import { ProductService } from './application/product.service';
import { ProductEntityMapper } from './infra/ProductEntityMapper';
import { DatabaseModule } from '../../database.module';

const services = [ProductService];
const controllers = [ProductController];

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers,
  providers: [
    ProductEntityMapper,
    ...services,
    { provide: 'ProductRepository', useClass: ProductRepository },
  ],
  exports: [],
})
export class ProductModule {}
