import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from '@nestjs/common/decorators';


@Controller('auth')
export class AuthController {


    constructor(private readonly AuthService: AuthService) { }

    @Post('login')
    login() {
        return this.AuthService.login();
    }


    @Post('register')
    register() {
        return this.AuthService.register();
    }


    //     @Post('login')
    // async login(@Request() req): Promise<User | null> {
    //   console.log('login route en auth.controller');

    //   const { username, password } = req.body; // Obtén las credenciales del cuerpo de la solicitud
    //     console.log(username ,"usuario", password ,"contrase;a")
    //   const user = await this.AuthService.validateUser(username, password);


    //   return null;
    // }

    //     @UseGuards()
    //     @Get('protected')
    //     protected():string{
    //         return "";
    //     }


}
