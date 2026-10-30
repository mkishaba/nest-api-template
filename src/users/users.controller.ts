import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { userToResponseDto } from './mappers/user-to-dto.mapper.js';
import { usersToResponseDto } from './mappers/users-to-dto.mappers.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return userToResponseDto(this.usersService.create(createUserDto));
  }

  @Get()
  findAll() {
    return usersToResponseDto(this.usersService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return userToResponseDto(this.usersService.findOne(+id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return userToResponseDto(this.usersService.update(+id, updateUserDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
