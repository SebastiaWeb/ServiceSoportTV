import { Module } from '@nestjs/common';
import { ServicesSoportController } from './services_soport/services_soport.controller';
import { ServicesSoportService } from './services_soport/services_soport.service';
import { ServiceSoportEntity } from './entities/service_soport.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnicalEntity } from 'src/technical/entities/technical.entity';
import { ClientEntity } from 'src/client/entities/client.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([ServiceSoportEntity, TechnicalEntity, ClientEntity])
    ],
    controllers: [ServicesSoportController],
    providers: [ServicesSoportService, ServiceSoportEntity, TechnicalEntity, ClientEntity]
})
export class ServicesSoportModule {}
