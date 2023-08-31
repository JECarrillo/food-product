import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(productData: Partial<Product>): Promise<Product> {
    const newProduct = this.productRepository.create(productData);
    return this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id): Promise<Product | undefined> {
    return this.productRepository.findOne(id);
  }

  async update(id , productData: Partial<Product>): Promise<Product | undefined> {
    const existingProduct = await this.productRepository.findOne(id);

    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    Object.assign(existingProduct, productData);
    return this.productRepository.save(existingProduct);
  }

  async remove(id): Promise<void> {
    const existingProduct = await this.productRepository.findOne(id);

    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    await this.productRepository.remove(existingProduct);
  }
}