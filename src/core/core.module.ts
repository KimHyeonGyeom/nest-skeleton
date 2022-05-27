import { Module } from '@nestjs/common';
import { TransactionManager } from '@typedorm/core';
import { TypeOrmDatabase } from './database/typeorm.database';

const TypeOrmProviders = [TransactionManager, TypeOrmDatabase];

@Module({
  providers: [...TypeOrmProviders],
  exports: [TransactionManager],
})
export class CoreModule {}
