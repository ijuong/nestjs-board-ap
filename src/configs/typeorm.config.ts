import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'cjhr#2022!',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
