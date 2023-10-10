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
    ) { }

    create(createUserDto: CreateUserDto) {
        return this.usersRepository.save(createUserDto)
    }

    findOneBy(username: string) {
        return this.usersRepository.findOne({where :{ username }})
    }

    findByUsernameWithPassword(username: string) {
        return this.usersRepository.findOne({
            where: { username },
            select: ['id', 'name', 'username', 'password'],
        });

    }
    
}

