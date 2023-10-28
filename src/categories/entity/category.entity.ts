import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/products/products.entity';

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    category: string;



    @OneToMany(() => Product, product => product.category)
    products: Product[];
}