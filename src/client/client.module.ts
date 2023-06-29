import { Module } from '@nestjs/common';
import { ClientController } from './client/client.controller';
import { ClientService } from './client/client.service';
import { ClientEntity } from './entities/client.entity';

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientEntity]
})
export class ClientModule {}
