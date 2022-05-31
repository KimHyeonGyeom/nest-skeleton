import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { EnvModule } from './env.module';
import { UserModule } from '@user/user.module';
// import { UserService } from './application/user/UserService';
// import { UserEntityMapper } from './infra/persistence/user/UserEntityMapper';
// import { UserRepository } from './infra/persistence/user/UserRepository';
// import { UserModule } from './interface/user/user.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRootEntity } from './infra/persistence/user/UserRootEntity';

//const UserProviders = [UserService, UserEntityMapper, UserRepository];

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    UserModule,
    //    TypeOrmModule.forFeature([UserRootEntity]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
