import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
//import { User } from '../../domain/domain/user/User';
import { IUserRepository } from '../../domain/domain/user/UserRepository';
import { UserRepository } from '../../infra/persistence/user/UserRepository';
import { UserEntityMapper } from '../../infra/persistence/user/UserEntityMapper';
import { DatabaseModule } from '../../database.module';
import { UserService } from '../../application/user/UserService';
import { User } from '../../infra/persistence/user/UserRootEntity';

// import { GoogleProfile } from '@user/infra/adapter/google/GoogleProfile';
//
// import { CreateUserCommandHandler } from '@user/application/command/create-user.command.handler';
// import { UserCreatedEventHandler } from '@user/application/event-handlers/user-created.handler';
// import { EmailVerificationCommandHandler } from '@user/application/command/email-verification.command.handler';
// import { FindUserCommandHandler } from '@user/application/command/find-user.command.handler';
// import { VerifyGoogleTokenCommandHandler } from '@user/application/command/verify-google-token.command.handler';

// infrastructure
const repositories = [UserRepository];
//const profiles = [GoogleProfile];

// interface
const controllers = [UserController];

// application

@Module({
  imports: [ConfigModule, DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [...controllers],
  providers: [
    UserEntityMapper,
    { provide: 'UserService', useClass: UserService },
    //{ provide: 'UserRepository', useClass: UserService },
    UserRepository,
    //UserRepository,
  ],
  exports: [],
})
export class UserModule {}
