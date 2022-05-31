import { ConnectionOptions } from 'typeorm';

import { User } from '@user/infra/persistence/entity/user.model';
//import { AdminUser } from '@user/infra/persistence/entity/admin-user.model';
import databaseConfig from './databaseConfig';

const DEV_ENV = 'development';

const config = databaseConfig();

const entities = [User];

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
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
};

export = connectionOptions;
