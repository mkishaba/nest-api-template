import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return new User('id-1', 'Martin', 42);
  }

  findAll() {
    return [new User('id-1', 'Martin', 42), new User('id-2', 'Paula', 43)];
  }

  findOne(id: number) {
    return new User('id-1', 'Martin', 42);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return new User('id-1', 'Martin', 42);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
