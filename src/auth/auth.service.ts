
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { promises } from 'dns';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Users } from 'src/users/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as jwtService from 'jsonwebtoken'

@Injectable()
export class AuthService {
    
    constructor (
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        private usersService: UsersService, 
    ){ }

    async validateUser(username:string, password: string): Promise<any>{

       const user = await this.userRepository.findOne({where:{userName:username, password: password}})

        if( user && user.password === password){
            const {password, userName, ...rest} = user;
            console.log(rest, "****")
            return rest;
        }

       return null;
    }

    async login(user:any){
        const payload = {username:user.username, sub: user.id};
        return{
           
            access_token: jwtService.sign(payload, 'password'),
            username: user.username,
            name: user.name
        };
    
    }
}

