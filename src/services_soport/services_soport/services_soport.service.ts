import { ConsoleLogger, Injectable } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { ServiceSoportRepository } from '../entities/service_soport.repository';
import { ServiceSoportDTO } from '../dto/service_soporte.dto';
import { ServiceSoportEntity } from '../entities/service_soport.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TechnicalEntity } from 'src/technical/entities/technical.entity';
import { ClientEntity } from 'src/client/entities/client.entity';
var jwt = require('jsonwebtoken');

@Injectable()
export class ServicesSoportService {

  constructor(@InjectRepository(ServiceSoportEntity) private __service_soport: Repository<ServiceSoportEntity>,
    @InjectRepository(TechnicalEntity) private technicalRepository: Repository<TechnicalEntity>,
    @InjectRepository(ClientEntity) private clientRepository: Repository<ClientEntity>) { }

  async getAllSolicitudx(): Promise<ServiceSoportEntity[]> {
    let id = 1;
    const serviceSoport = await this.__service_soport.find({
      relations: ['technicals']
    });

    return serviceSoport;
  }
  async getAllSolicitud() {
    const serviceSoports = await this.__service_soport.find({
      
    });

    // Mapear los resultados para obtener solo los objetos TechnicalEntity
    const resultados = serviceSoports.map(serviceSoport => {
      return {
        ...serviceSoport,
        technicals: serviceSoport.id_technical,
      };
    });

    return resultados;
  }


  async createServiceSoport(serviceSoportDTO: ServiceSoportDTO): Promise<ServiceSoportEntity> {
    const { id_client, id_technical } = serviceSoportDTO;

    const technical = await this.technicalRepository.findBy({ id: id_technical });
    const client = await this.clientRepository.findBy({ id: id_client });

    Math.random()

    const serviceSoport = new ServiceSoportEntity();
    serviceSoport.date_start_service = serviceSoportDTO.date_start_service;
    serviceSoport.date_finish_service = serviceSoportDTO.date_finish_service;
    serviceSoport.calification_service = serviceSoportDTO.calification_service;
    const ticket = this.generateRandomNumbers();
    var token = jwt.sign({ foo: ticket }, ticket.toString(), { expiresIn: this.getExpireToken(serviceSoportDTO.date_start_service, serviceSoportDTO.date_finish_service) });
    serviceSoport.token = token;
    serviceSoport.servicio_prestado = serviceSoportDTO.servicio_prestado;
    const serviceSoportDate = this.__service_soport.create(serviceSoport);

    serviceSoportDate.technicals = technical; // Assign the actual TechnicalEntity instance
    serviceSoportDate.id_client = client[0].id;// Assign the id_client value


    const createdServiceSoport = await this.__service_soport.save(serviceSoportDate);

    return createdServiceSoport;
  }

  getExpireToken(fecha_inicio: any, fecha_fin: any) {
    const fecha_inicio_date = new Date(fecha_inicio.toString());
    const fecha_fin_date = new Date(fecha_fin);
  
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = fecha_fin_date.getTime() - fecha_inicio_date.getTime() ;
    // Convert milliseconds to hours
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    return Math.abs(differenceInHours);
  }
  
  generateToken(expirationHours, secretKey, ticket) {
    const payload = { ticket };
    const options = { expiresIn: `${expirationHours}h` };
  
    const token = jwt.sign(payload, secretKey, options);
    return token;
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
    serviceSoport[0].id_client = clients[0].id;
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

  generateRandomNumbers() {
    const randomNumbers = new Set();
    
    while (randomNumbers.size < 8) {
      const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
      randomNumbers.add(randomNumber);
    }
    
    return Array.from(randomNumbers);
  }

}

