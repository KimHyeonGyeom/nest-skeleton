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
import { CreateOrderDto } from './dto/create-order.dto';
import { UndefinedToNullInterceptor } from '../../../interceptors/undefinedToNull.interceptor';
import { OrderService } from '../application/order.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  public create(@Body() dto: CreateOrderDto) {
    const { address } = dto;

    const user = this.orderService.createOrder(dto);
  }

  @Get('/:id')
  public async getOrderInfo(@Param() param) {
    const { id } = param;

    const order = await this.orderService.getOrder(id);

    return { order };
  }

  @Patch('/:id')
  public async updateUser(@Param() param, @Body() body) {
    const { id } = param;
    const { address } = body;

    const user = await this.orderService.updateOrder(id, { address });

    return { message: '성공' };
  }

  @Delete('/:id')
  public async deleteUser(@Param() param) {
    const { id } = param;

    const user = await this.orderService.deleteOrder(id);

    return { message: '성공' };
  }
}
