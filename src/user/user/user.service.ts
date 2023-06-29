import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/user/dto/user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/entities/user.repository';

@Injectable()
export class UserService {
    private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userDto: UserDTO): Promise<User> {

    const user = new User();

    user.firstName = userDto.firstName;
    user.lastName = userDto.lastName;
    user.email = userDto.email;
    user.password = userDto.password;
    user.movil = userDto.movil;
    user.isActive = userDto.isActive;

    const createdUser = await this.userRepository.save(user);

    return createdUser;
  }
}
