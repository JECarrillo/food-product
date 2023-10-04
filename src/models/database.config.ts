import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const databaseConfig : TypeOrmModuleOptions = {

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