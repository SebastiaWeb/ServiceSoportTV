import { Repository } from 'typeorm';
import { TechnicalEntity } from './technical.entity';

export class TechnicalRepository {

  constructor(private __technical:Repository<TechnicalEntity>) {}

  async save(technical: TechnicalEntity): Promise<TechnicalEntity> {

    this.__technical.create(technical);
       
    this.__technical.save(technical);

    return technical;
  }

  async update(id: number, technical: TechnicalEntity): Promise<TechnicalEntity>{
    this.__technical.update({ id: id}, technical);

    return technical;
  }

  async delete(id:number){
    try {
      
      this.__technical.delete({id: id});

    } catch (error) {
      console.error('Error: Delete user');
    }
  }
}