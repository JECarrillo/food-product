import { Controller, Get, Post, UseGuards, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body, Request } from '@nestjs/common/decorators';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as authGuard from './guard/auth.guard';




@Controller('auth')
export class AuthController {


    constructor(private readonly authService: AuthService) { }

    @Post('login')
    login(
        @Body()
        loginDto: LoginDto,
    ) {
        console.log(loginDto)
        return this.authService.login(loginDto);
    }


    @Post('register')
    register(
        @Body()
        registerDto: RegisterDto

    ) {
        console.log(registerDto)
        return this.authService.register(registerDto);
    }

    
    @Get('profile')
    @UseGuards(authGuard.AuthGuard)
    profile(
        @Request() req ){
        return req.user;
    }

}
