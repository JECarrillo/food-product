import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/products/products.entity';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productsService.create(productData);
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<any | undefined> {
    return this.productsService.findById(id);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() productData: Partial<Product>): Promise<Product | undefined> {
    return this.productsService.update(id, productData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productsService.delete(id);
  }
}

