import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

export class UserRepository {
  

  constructor(private __user: Repository<User>) {}

  async save(user: User): Promise<User> {


    this.__user.create(user);

    this.__user.save(user);

    return user;
  }

  async update(id: number, user: User): Promise<User>{
    this.__user.update({ id: id}, user);

    return user;
  }

  async delete(id:number){
    try {
      
      console.log(this.__user.delete({id: id}));

    } catch (error) {
      console.error('Error: Delete user');
    }
  }
}
