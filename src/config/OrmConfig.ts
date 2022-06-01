import databaseConfig from './databaseConfig';
import { Product } from '../api/product/infra/persistence/entity/product.model';
import { OrderModel } from '../api/order/infra/persistence/entity/order.model';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../api/user/infra/persistence/entity/user.model';

const DEV_ENV = 'development';

const config = databaseConfig();

const entities = [User, Product, OrderModel];

const connectionOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: config.database.host,
  port: config.database.port,
  username: config.database.username,
  password: config.database.password,
  database: config.database.dbName,
  entities,
  logging: true,
  //logger: 'debug',
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  keepConnectionAlive: true,
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(), //Camelcase 필드를 Snake 컬럼에 매핑하기
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
};

export = connectionOptions;
