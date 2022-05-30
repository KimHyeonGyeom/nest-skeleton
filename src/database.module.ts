import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmDatabase } from './core/database/typeorm/TypeOrmDatabase';
import { TransactionManager } from './core/database/typeorm/TransactionManager';
import { EnvModule } from './env.module';
import { TypeormTransactionMiddleware } from './core/database/typeorm/TransactionMiddleware';
import { TypeOrmModule } from '@nestjs/typeorm';

const TypeOrmProviders = [TransactionManager, TypeOrmDatabase];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_DATABASE || 'nest',
      entities: [],
      charset: 'utf8mb4',
      synchronize: false,
      logging: true,
      keepConnectionAlive: true,
      //namingStrategy: new SnakeNamingStrategy(), //Camelcase 필드를 Snake 컬럼에 매핑하기
    }),
  ],
  providers: [...TypeOrmProviders],
  exports: [TransactionManager],
})
export class DatabaseModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(TypeormTransactionMiddleware).forRoutes('*');
  }
}
