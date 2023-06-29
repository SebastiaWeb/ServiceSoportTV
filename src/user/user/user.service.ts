import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/user/dto/user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/entities/user.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private __user: Repository<User>
  ) {
    
  }

  async createUser(userDto: UserDTO): Promise<User> {

    const user = this.__user.create(userDto);

    const createdUser = await this.__user.save(user);

    return createdUser;
  }
}
