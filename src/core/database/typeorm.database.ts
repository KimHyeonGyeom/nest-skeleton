import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TypeOrmDatabase implements OnModuleInit {
  async onModuleInit() {
    const MysqlDataSource = new DataSource({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [],
      charset: 'utf8mb4',
      synchronize: false,
      logging: true,
    });
    await MysqlDataSource.initialize();
  }
}
