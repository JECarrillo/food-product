import { Request, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticateGuard } from './auth/authenticated.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { EntitySchemaOptions } from 'typeorm';

@Controller()
export class AppController {

  constructor(private readonly authService: AuthService) { }


  // @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    //Todo:

    return this.authService.login(req.body);
  }


  // @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user
  }
}

