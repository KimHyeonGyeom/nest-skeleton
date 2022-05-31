import { Module } from '@nestjs/common';
import { EnvModule } from './env.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from './config/OrmConfig';

@Module({
  imports: [EnvModule, TypeOrmModule.forRoot(connectionOptions)],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
