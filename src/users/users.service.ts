import { Injectable } from '@nestjs/common';
import { Users } from './users.entity'; // Importa la entidad Users
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
};

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(Users) 
        private readonly usersRepository: Repository<Users>, 
    ) {}

        create( users : Users) {
            return this.usersRepository.save( users)
        }


    async findOne(username: string): Promise<User | undefined> {
       
        const user = await this.usersRepository.findOne({ where: { userName: username } });

        if (user) {
            return {
                id: user.id,
                name: user.name,
                username: user.userName, 
                password: user.password,
            };
        }
        return undefined; 
    }
}
