import { Injectable } from '@nestjs/common';
import { Users } from './users.entity'; // Importa la entidad Users
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(Users) 
        private readonly usersRepository: Repository<Users>, 
    ) {}

        create( createUserDto : CreateUserDto) {
            return this.usersRepository.save( createUserDto)
        }

        findOneBy( userName:string) {
            return this.usersRepository.findOneBy({userName})
        }
    // async findOne(username: string): Promise<User | undefined> {
       
    //     const user = await this.usersRepository.findOne({ where: { userName: username } });

    //     if (user) {
    //         return {
    //             id: user.id,
    //             name: user.name,
    //             username: user.userName, 
    //             password: user.password,
    //         };
    //     }
       
    }

