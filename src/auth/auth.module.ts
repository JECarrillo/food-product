import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";


import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";

import { JwtModule } from "@nestjs/jwt";

import { UsersService } from "src/users/users.service";
import { Users } from "src/users/users.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [UsersModule ,TypeOrmModule.forFeature([Users]),JwtModule.register({
    secret: 'password',
    signOptions:{expiresIn:'3600s'},
  })],
  providers:  [AuthService,UsersService],
  exports: [AuthService,UsersService]
})
export class AuthModule{}