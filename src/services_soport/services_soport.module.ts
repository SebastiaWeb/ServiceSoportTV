import { Module } from '@nestjs/common';
import { ServicesSoportController } from './services_soport/services_soport.controller';
import { ServicesSoportService } from './services_soport/services_soport.service';
import { ServiceSoportEntity } from './entities/service_soport.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([ServiceSoportEntity])
    ],
    controllers: [ServicesSoportController],
    providers: [ServicesSoportService, ServiceSoportEntity]
})
export class ServicesSoportModule {}
