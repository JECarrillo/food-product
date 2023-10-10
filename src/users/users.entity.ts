import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    username: string;

    @Column()
    password: string;
}