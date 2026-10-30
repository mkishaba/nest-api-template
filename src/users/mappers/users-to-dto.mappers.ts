import { User } from '../entities/user.entity.js';
import { userToResponseDto } from './user-to-dto.mapper.js';

export function usersToResponseDto(users: User[]) {
  return users.map((user) => userToResponseDto(user));
}
