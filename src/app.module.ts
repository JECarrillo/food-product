import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './models/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { Product } from './products/products.entity';
;
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    UsersModule,
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Product]), //Product es la clase Entity
    AuthModule,

  ],
  controllers: [AppController, ProductsController, AuthController],//AuthController
  providers: [AppService, ProductsService, AuthService], 
})
export class AppModule {}
