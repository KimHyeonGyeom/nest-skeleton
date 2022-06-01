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
import { CreateUserDto } from './dto/create-user.dto';

import { UndefinedToNullInterceptor } from '../../../interceptors/undefinedToNull.interceptor';
import { UserService } from '../application/user.service';

@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public signUp(@Body() dto: CreateUserDto) {
    const { name, password } = dto;

    const user = this.userService.createUser(dto);
  }

  @Get('/:id')
  public async getUserInfo(@Param() param) {
    const { id } = param;

    const user = await this.userService.getUser(id);
    if (user) {
      console.log(user.id);
    }
    return { user: user };
  }

  @Patch('/:id')
  public async updateUser(@Param() param, @Body() body) {
    const { id } = param;
    const { name, password } = body;

    const user = await this.userService.updateUser(id, { name, password });

    return { message: '성공' };
  }

  @Delete('/:id')
  public async deleteUser(@Param() param) {
    const { id } = param;

    const user = await this.userService.deleteUser(id);

    return { message: '성공' };
  }
}
