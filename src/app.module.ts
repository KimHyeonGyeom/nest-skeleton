import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { EnvModule } from './env.module';
import { UserModule } from '@user/user.module';
import { ProductModule } from './api/product/product.module';
import { OrderModule } from './api/order/order.module';

@Module({
  imports: [EnvModule, DatabaseModule, OrderModule, UserModule, ProductModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
