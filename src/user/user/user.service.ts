import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/user/dto/user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from 'src/user/entities/user.repository';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    private userRepository: UserRepository;

  constructor(@InjectRepository(User) private __user: Repository<User>) {
    this.userRepository = new UserRepository(this.__user);
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


  async updateUser(id: number, userDto: UserDTO): Promise<User> {

    try {
      if (id > 0) {
        const user = new User();

        user.firstName = userDto.firstName;
        user.lastName = userDto.lastName;
        user.email = userDto.email;
        user.password = userDto.password;
        user.movil = userDto.movil;
        user.isActive = userDto.isActive;

        const createdUser = await this.userRepository.update(id, user);

        return createdUser;
      }
    } catch (error) {
      console.error('Error: create object update');
    }
    
  }

  async deleteUser(id:number){
    
    try {
      const deleteUser = await this.userRepository.delete(id);

      return deleteUser;
    } catch (error) {
      console.error('Error: delete user');
    }
  }
}
