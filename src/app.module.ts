import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './models/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { Product } from './products/products.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { CategoriesController } from './categories/controller/category.controller';
import { CategoriesService } from './categories/service/category.service';
import { Category } from './categories/entity/category.entity';



@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    UsersModule,
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Category]),
    AuthModule,
    

  ],
  controllers: [AppController, ProductsController, AuthController,CategoriesController],
  providers: [AppService, ProductsService, AuthService,CategoriesService], 
})
export class AppModule {}
