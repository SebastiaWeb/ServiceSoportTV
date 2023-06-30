import { Injectable } from '@nestjs/common';
import { ServiceSoportRepository } from '../entities/service_soport.repository';
import { ServiceSoportDTO } from '../dto/service_soporte.dto';
import { ServiceSoportEntity } from '../entities/service_soport.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { TechnicalEntity } from 'src/technical/entities/technical.entity';
import { ClientEntity } from 'src/client/entities/client.entity';

@Injectable()
export class ServicesSoportService {

  constructor(@InjectRepository(ServiceSoportEntity) private __service_soport: Repository<ServiceSoportEntity>,
    @InjectRepository(TechnicalEntity) private technicalRepository: Repository<TechnicalEntity>,
    @InjectRepository(ClientEntity) private clientRepository: Repository<ClientEntity>) { }

  async getAllSolicitud(): Promise<ServiceSoportEntity[]>{
    const serviceSoport = await this.__service_soport.find({
      relations: ['technicals', 'clients'],
    });
    
    return serviceSoport;
  }

  async createServiceSoport(serviceSoportDTO: ServiceSoportDTO): Promise<ServiceSoportEntity> {
    const { id_client, id_technical } = serviceSoportDTO;

    const technicals = await this.technicalRepository.findByIds([id_technical]);
    const clients = await this.clientRepository.findByIds([id_client]);

    const serviceSoport = this.__service_soport.create(serviceSoportDTO);
    serviceSoport.technicals = technicals;
    serviceSoport.clients = clients;

    const createdServiceSoport = await this.__service_soport.save(serviceSoport);

    return createdServiceSoport;
  }

  async updateServiceSoport(id: number, serviceSoportDTO: ServiceSoportDTO): Promise<ServiceSoportEntity> {
    const { id_client, id_technical } = serviceSoportDTO;

    const technicals = await this.technicalRepository.findByIds([id_technical]);
    const clients = await this.clientRepository.findByIds([id_client]);

    const serviceSoport = await this.__service_soport.findBy({ id: id });

    serviceSoport[0].token = serviceSoportDTO.token;
    serviceSoport[0].date_start_service = serviceSoportDTO.date_start_service;
    serviceSoport[0].date_finish_service = serviceSoportDTO.date_finish_service;
    serviceSoport[0].calification_service = serviceSoportDTO.calification_service;

    serviceSoport[0].technicals = technicals;
    serviceSoport[0].clients = clients;

    const updatedServiceSoport = await this.__service_soport.save(serviceSoport[0]);

    return updatedServiceSoport;

  }

  async deleteServiceSoport(id: number): Promise<void> {
    try {
      // Check if the serviceSoport exists
      const existingServiceSoport = await this.__service_soport.findBy({ id });

      // Delete the serviceSoport by ID
      await this.__service_soport.delete(id);

    } catch (error) {

    }
  }

}

