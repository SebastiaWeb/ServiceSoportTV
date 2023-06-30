import { Repository } from 'typeorm';
import { ClientEntity } from './client.entity';

export class ClientRepository {

  constructor(private __client: Repository<ClientEntity>) {
    
  }

  async save(client: ClientEntity): Promise<ClientEntity> {

    this.__client.create(client);

    this.__client.save(client);

    return client;
  }

  async update(id: number, client: ClientEntity): Promise<ClientEntity>{
    this.__client.update({ id: id}, client);

    return client;
  }

  async delete(id:number){
    try {
      
      this.__client.delete({id: id});

    } catch (error) {
      console.error('Error: Delete user');
    }
  }
}