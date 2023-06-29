import { ServiceSoportEntity } from './service_soport.entity';

export class ServiceSoportRepository {
  private serviceSoport: ServiceSoportEntity[];

  constructor() {
    this.serviceSoport = [];
  }

  async save(serviceSoport: ServiceSoportEntity): Promise<ServiceSoportEntity> {
    const generatedId = Date.now();

    serviceSoport.id = generatedId;

    this.serviceSoport.push(serviceSoport);

    return serviceSoport;
  }

}