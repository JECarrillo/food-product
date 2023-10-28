import { Injectable, NotFoundException, Delete, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/products/products.entity';
import { CategoriesService } from 'src/categories/service/category.service';

@Injectable()
export class ProductsService {
  

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private categoriesService: CategoriesService
  ) {}

  async create(productData: Partial<Product>): Promise<Product> {
  
    const newProduct = this.productRepository.create(productData);
    return this.productRepository.save(newProduct);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findById(id): Promise<Product | undefined> {
    const resp = await this.productRepository.findOne({where: {id}});
    return resp;
  }

  async update(id, productData: Partial<Product>): Promise<Product | undefined> {
    if (!id) {
      throw new BadRequestException('Invalid product ID');
    }
    const existingProduct = await this.productRepository.findOne({ where: { id } });
    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    Object.assign(existingProduct, productData);
    console.log(productData);
    return this.productRepository.save(existingProduct);
  }

  async delete(id): Promise<void > {
    const existingProduct = await this.productRepository.findOne({where :{id}});
    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    await this.productRepository.remove(existingProduct);
  }
  
}