import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
//import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

//import { EmailModule } from '@email/email.module';

import { UserController } from './interface/user.controller';

import { UserRepository } from './infra/persistence/repository/user.repository';
import { UserServiceImpl } from './application/user.service';
import { UserEntityMapper } from './infra/UserEntityMapper';
import { User } from './infra/persistence/entity/user.model';
import { DatabaseModule } from '../../database.module';

const controllers = [UserController];
const services = [UserServiceImpl];

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers,
  providers: [
    UserEntityMapper,
    ...services,
    { provide: 'UserRepository', useClass: UserRepository },
  ],
  exports: [],
})
export class UserModule {}
