import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { EnvModule } from './env.module';
import { UserController } from './interface/user/user.controller';
import { UserService } from './application/user/UserService';
import { UserEntityMapper } from './infra/persistence/user/UserEntityMapper';
import { UserRepository } from './infra/persistence/user/UserRepository';
import { UserModule } from './interface/user/user.module';
import { TransactionManager } from './core/database/typeorm/TransactionManager';
import { TypeormTransactionMiddleware } from './core/database/typeorm/TransactionMiddleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRootEntity } from './infra/persistence/user/UserRootEntity';

const UserProviders = [UserService, UserEntityMapper, UserRepository];

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    UserModule,
    TypeOrmModule.forFeature([UserRootEntity]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
