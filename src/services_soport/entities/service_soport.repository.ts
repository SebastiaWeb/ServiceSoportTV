import { LineString, Repository } from 'typeorm';
import { ServiceSoportEntity } from './service_soport.entity';
import { TechnicalEntity } from 'src/technical/entities/technical.entity';
import { ClientEntity } from 'src/client/entities/client.entity';

export class ServiceSoportRepository {

  constructor(private __service_soport: Repository<ServiceSoportEntity>) {}

  async saveServiceSoportWithTechnicalsAndClients(
    token: string,
    dateStartService: Date,
    dateFinishService: Date,
    calificationService: number,
    technicalIds: number[],
    clientIds: number[],
    servicio_prestado: string,
  ): Promise<ServiceSoportEntity> {
    const serviceSoport = new ServiceSoportEntity();
    serviceSoport.token = token;
    serviceSoport.date_start_service = dateStartService;
    serviceSoport.date_finish_service = dateFinishService;
    serviceSoport.calification_service = calificationService;
    serviceSoport.servicio_prestado = servicio_prestado;

    const technicals = await this.__service_soport.findByIds(technicalIds);

    const clients = await this.__service_soport.findByIds(clientIds);


    return this.__service_soport.save(serviceSoport);
  }

}