import { Injectable } from '@nestjs/common';
import { ServiceSoportRepository } from '../entities/service_soport.repository';
import { ServiceSoportDTO } from '../dto/service_soporte.dto';
import { ServiceSoportEntity } from '../entities/service_soport.entity';

@Injectable()
export class ServicesSoportService {
    private serviceSoport: ServiceSoportRepository;

    constructor() {
      this.serviceSoport = new ServiceSoportRepository();
    }
  
    async createUser(serviceSoportDTO: ServiceSoportDTO): Promise<ServiceSoportEntity> {
  
      const serviceSoport = new ServiceSoportEntity();
  
      serviceSoport.id = serviceSoportDTO.id;
      serviceSoport.id_technical = serviceSoportDTO.id_technical;
      serviceSoport.token = serviceSoportDTO.token;
      serviceSoport.date_start_service = serviceSoportDTO.date_start_service;
      serviceSoport.date_finish_service = serviceSoportDTO.date_finish_service;
      serviceSoport.calification_service = serviceSoportDTO.calification_service;
  
      const createdUser = await this.serviceSoport.save(serviceSoport);
  
      return createdUser;
    }
}
