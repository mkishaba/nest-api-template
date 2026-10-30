import { UserResponseDto } from '../dto/user-response.dto.js';
import { User } from '../entities/user.entity.js';

export function userToResponseDto(userEntity: User) {
  return new UserResponseDto(userEntity.id, userEntity.name, userEntity.age);
}
