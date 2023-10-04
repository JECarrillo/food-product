import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersService } from './users.service';

@Injectable()
export class SesionSerializer extends PassportSerializer {
    constructor(private readonly usersService: UsersService) {
        super();
    }

    serializeUser(user: any, done: (err: Error, user: any) => void): void {
        done(null, { id: user.id });
    }

    deserializeUser(payload: any, done: (err: Error, payload: any) => void): void {
        // Aquí debes buscar al usuario en la base de datos utilizando el servicio de usuarios
        this.usersService.findOne(payload.id)
            .then(user => {
                done(null, user);
            })
            .catch(err => {
                done(err, null);
            });
    }
}