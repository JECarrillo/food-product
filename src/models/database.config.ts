import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const databaseConfig : TypeOrmModuleOptions = {

  //   type: 'mysql',
  // host: 'localhost',
  // port: 1433,
  // username: 'sa',
  // password: 'carrillo',
  // database: 'CRUD-Angular',

  // type: 'mssql',
  // host: 'localhost',
  // port: 3000,
  // username: 'sa' ,
  // password: 'carrillo',
  // database: 'Crud-Angular',
  // retryDelay: 3000,
  // autoLoadEntities: true,

  "type": "mssql",
  "host": "localhost",
  "port": 1433,
  "username": "sa",
  "password": "carrillo",
  "database": "CRUD-Angular",
  "entities": [__dirname + '/../**/**/*.entity{.ts,.js}'],
  "synchronize": true,
  "options": {"trustServerCertificate": true} 
}