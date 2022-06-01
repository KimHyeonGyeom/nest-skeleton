import { ConnectionOptions } from 'typeorm';
import { User } from '@user/infra/persistence/entity/user.model';
import databaseConfig from './databaseConfig';
import { Product } from '../api/product/infra/persistence/entity/product.model';
import { Order } from '../api/order/infra/persistence/entity/order.model';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const DEV_ENV = 'development';

const config = databaseConfig();

const entities = [User, Product, Order];

const connectionOptions: ConnectionOptions = {
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
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(), //Camelcase 필드를 Snake 컬럼에 매핑하기
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
};

export = connectionOptions;
