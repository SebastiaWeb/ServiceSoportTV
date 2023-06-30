import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../entities/client.repository';
import { ClientEntity } from '../entities/client.entity';
import { ClientDTO } from '../dto/client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
    private clientRepository: ClientRepository;

    constructor(
      @InjectRepository(ClientEntity) private __cient: Repository<ClientEntity>
    ) {
      this.clientRepository = new ClientRepository(this.__cient);
    }
    async getAllClient(): Promise<ClientEntity[]> {
      const clients = await this.__cient.find();
      return clients;
    }
    async createClient(userDto: ClientDTO): Promise<ClientEntity> {
  
      const user = new ClientEntity();
      user.street = userDto.street;
      user.id_user = userDto.id_user;
  
      const createdUser = await this.clientRepository.save(user);
  
      return createdUser;
    }

    async updateClient(id: number, clientDTO: ClientDTO): Promise<ClientDTO> {

      try {
        if (id > 0) {
          const client = new ClientDTO();
  
          client.street = clientDTO.street;
          client.id_user = clientDTO.id_user;
  
          const createdUser = await this.clientRepository.update(id, client);
  
          return createdUser;
        }
      } catch (error) {
        console.error('Error: create object update');
      }
      
    }
  
    async deleteClient(id:number){
      
      try {
        const deleteUser = await this.clientRepository.delete(id);
  
        return deleteUser;
      } catch (error) {
        console.error('Error: delete user');
      }
    }
}
