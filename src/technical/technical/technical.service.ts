import { Injectable } from '@nestjs/common';
import { TechnicalRepository } from '../entities/technical.repository';
import { TechnicalDTO } from '../dto/technical.dto';
import { TechnicalEntity } from '../entities/technical.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TechnicalService {

    constructor(
      @InjectRepository(TechnicalEntity) private __tecnical: Repository<TechnicalEntity>) {}
  
    async createUser(technicalDto: TechnicalDTO): Promise<TechnicalEntity> {
      
      const technical = this.__tecnical.create(technicalDto)

      const createdTechnical = await this.__tecnical.save(technical);
  
      return createdTechnical;
    }
}
