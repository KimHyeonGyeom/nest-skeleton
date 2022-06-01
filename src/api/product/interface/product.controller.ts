import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UndefinedToNullInterceptor } from '../../../interceptors/undefinedToNull.interceptor';
import { ProductService } from '../application/product.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  public create(@Body() dto: CreateProductDto) {
    const { name, price } = dto;

    const user = this.productService.createProduct(dto);
  }

  @Get('/:id')
  public async getUserInfo(@Param() param) {
    const { id } = param;

    const user = await this.productService.getProduct(id);

    return { user: user.toString() };
  }

  @Patch('/:id')
  public async updateUser(@Param() param, @Body() body) {
    const { id } = param;
    const { name, price } = body;

    const user = await this.productService.updateProduct(id, { name, price });

    return { message: '성공' };
  }

  @Delete('/:id')
  public async deleteUser(@Param() param) {
    const { id } = param;

    const user = await this.productService.deleteProduct(id);

    return { message: '성공' };
  }
}
