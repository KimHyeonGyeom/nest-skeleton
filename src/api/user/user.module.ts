import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
//import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

//import { EmailModule } from '@email/email.module';

import { User } from '@user/infra/persistence/entity/user.model';
import { UserRepository } from '@user/infra/persistence/repository/user.repository';
import { UserController } from './interface/user.controller';
import { UserService } from '@user/application/user.service';
import { UserEntityMapper } from '@user/infra/UserEntityMapper';

const controllers = [UserController];
const services = [UserService];

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([User])],
  controllers,
  providers: [
    UserEntityMapper,
    ...services,
    { provide: 'UserRepository', useClass: UserRepository },
  ],
  exports: [TypeOrmModule],
})
export class UserModule {}
