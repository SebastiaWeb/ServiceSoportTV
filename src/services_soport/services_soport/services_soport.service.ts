import { Injectable } from '@nestjs/common';
import { ServiceSoportRepository } from '../entities/service_soport.repository';
import { ServiceSoportDTO } from '../dto/service_soporte.dto';
import { ServiceSoportEntity } from '../entities/service_soport.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesSoportService {

    constructor(@InjectRepository(ServiceSoportEntity) private __service_soport: Repository<ServiceSoportEntity>) {}
  
    async createUser(serviceSoportDTO: ServiceSoportDTO): Promise<ServiceSoportEntity> {
  
      const serviceSoport = this.__service_soport.create(serviceSoportDTO)
  
      const createdServiceSoport = await this.__service_soport.save(serviceSoport);
  
      return createdServiceSoport;
    }
}
