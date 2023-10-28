import { Category } from '../categories/entity/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,  } from 'typeorm';


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    categoryId: number

    @ManyToOne(() => Category, category => category.products)
    @JoinColumn({name: 'categoryId'})
    category: Category;
}