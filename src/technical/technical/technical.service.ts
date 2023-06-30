import { Injectable } from '@nestjs/common';
import { TechnicalRepository } from '../entities/technical.repository';
import { TechnicalDTO } from '../dto/technical.dto';
import { TechnicalEntity } from '../entities/technical.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TechnicalService {
  private technical: TechnicalRepository

  constructor(
    @InjectRepository(TechnicalEntity) private __tecnical: Repository<TechnicalEntity>) {
      this.technical = new TechnicalRepository(this.__tecnical);
  }

  async createTechnical(technicalDto: TechnicalDTO): Promise<TechnicalEntity> {

    const technical = new TechnicalEntity();
    technical.rol = technicalDto.rol;

    const createdTechnical = await this.technical.save(technicalDto);

    return createdTechnical;
  }

  async updateTechnical(id: number, technicalDto: TechnicalDTO): Promise<TechnicalDTO> {

    try {
      if (id > 0) {
        const technical = new TechnicalDTO();

        technical.rol = technicalDto.rol;
        technical.id_user = technicalDto.id_user;

        const createdUser = await this.technical.update(id, technical);

        return createdUser;
      }
    } catch (error) {
      console.error('Error: create object update');
    }
    
  }

  async deleteTechnical(id:number){
    
    try {
      const deleteUser = await this.technical.delete(id);

      return deleteUser;
    } catch (error) {
      console.error('Error: delete user');
    }
  }
}
