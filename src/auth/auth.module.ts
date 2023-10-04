import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";

import { LocalStrategy } from './local.strategy';
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SesionSerializer } from "src/users/session.serializer";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
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