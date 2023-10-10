
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as jwtService from 'jsonwebtoken'
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
   
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService : JwtService
    ) { }

    async register({name, username,password}: RegisterDto) {

        const user = await this.userService.findOneBy(username);

        if (user) {
            throw new BadRequestException('El usuario ya existe');
        }

        return await this.userService.create({
            name,
            username,
            password: await bcryptjs.hash(password, 10)
        });
    }

    async login({ username, password }: LoginDto) {
        const user = await this.userService.findOneBy(username);
        if (!user) {
            throw new UnauthorizedException('username is wrong');
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
          
            throw new UnauthorizedException('password is wrong');
        }
      
        const payload = { username: user.username}

        const token = await this.jwtService.signAsync(payload)

        return {
            
            token,
            username
        }

    }










    // constructor (
    //     @InjectRepository(Users)
    //     private userRepository: Repository<Users>,
    //     private usersService: UsersService, 
    // ){ }

    // async validateUser(username:string, password: string): Promise<any>{

    //    const user = await this.userRepository.findOne({where:{userName:username, password: password}})

    //     if( user && user.password === password){
    //         const {password, userName, ...rest} = user;
    //         console.log(rest, "****")
    //         return rest;
    //     }

    //    return null;
    // }

    // async login(user:any){
    //     const payload = {username:user.username, sub: user.id};
    //     return{

    //         access_token: jwtService.sign(payload, 'password'),
    //         username: user.username,
    //         name: user.name
    //     };

    // }
}

function compare(password: string, password1: string) {
    throw new Error('Function not implemented.');
}

