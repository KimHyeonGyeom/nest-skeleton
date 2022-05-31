import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '../../../domain/domain/user/User';
import { User as asd } from '../../../infra/persistence/user/UserRootEntity';

const DEV_ENV = 'development';

export const MysqlDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || '1234',
  database: process.env.DATABASE_DB_NAME || 'nest',
  entities: [asd],
  //logging: ['warn', 'error'],
  //logger: process.env.NODE_ENV === DEV_ENV ? 'debug' : 'file',
  charset: 'utf8mb4',
  synchronize: false,
  logging: true,
});
// export const MysqlDataSource = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: '1234',
//         database: 'nest',
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         synchronize: true,
//       });
//
//       return dataSource.initialize();
//     },
//   },
// ];
@Injectable()
export class TypeOrmDatabase implements OnModuleInit {
  async onModuleInit() {
    await MysqlDataSource.initialize();
  }
}
