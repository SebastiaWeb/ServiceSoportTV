import { ClientEntity } from './client.entity';

export class ClientRepository {
  private client: ClientEntity[];

  constructor() {
    this.client = [];
  }

  async save(client: ClientEntity): Promise<ClientEntity> {
    const generatedId = Date.now();

    client.id = generatedId;

    this.client.push(client);

    return client;
  }

}