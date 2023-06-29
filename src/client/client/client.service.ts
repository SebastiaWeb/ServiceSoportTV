import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../entities/client.repository';
import { ClientEntity } from '../entities/client.entity';
import { ClientDTO } from '../dto/client.dto';

@Injectable()
export class ClientService {
    private userRepository: ClientRepository;

    constructor() {
      this.userRepository = new ClientRepository();
    }
  
    async createUser(userDto: ClientDTO): Promise<ClientEntity> {
  
      const user = new ClientEntity();
  
      user.id = userDto.id;
      // user.id_user = userDto.id_user;
  
      const createdUser = await this.userRepository.save(user);
  
      return createdUser;
    }
}
