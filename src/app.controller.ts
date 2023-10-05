import { Request, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';


import { AuthService } from './auth/auth.service';
import { EntitySchemaOptions } from 'typeorm';

@Controller()
export class AppController {

  constructor(private readonly authService: AuthService) { }


  // @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    //Todo:

    return this.authService.login();
  }


  // @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user
  }
}

