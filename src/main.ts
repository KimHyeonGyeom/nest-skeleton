import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MysqlDataSource } from './core/database/typeorm/TypeOrmDatabase';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

async function bootstrap() {
  initializeTransactionalContext(); // Initialize cls-hooked
  patchTypeORMRepositoryWithBaseRepository(); // patch Repository with BaseRepository.

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
