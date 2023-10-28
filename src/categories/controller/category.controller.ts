import { Controller, Get } from '@nestjs/common';
import { Category } from '../entity/category.entity'
import { CategoriesService } from '../service/category.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoriesService.findAllCategories();
  }
}
