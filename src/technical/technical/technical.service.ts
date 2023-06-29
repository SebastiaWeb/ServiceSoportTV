import { Injectable } from '@nestjs/common';
import { TechnicalRepository } from '../entities/technical.repository';
import { TechnicalDTO } from '../dto/technical.dto';
import { TechnicalEntity } from '../entities/technical.entity';

@Injectable()
export class TechnicalService {
    private userRepository: TechnicalRepository;

    constructor() {
      this.userRepository = new TechnicalRepository();
    }
  
    async createUser(userDto: TechnicalDTO): Promise<TechnicalEntity> {
  
      const user = new TechnicalEntity();
  
      user.id = userDto.id;
      user.id_user = userDto.id_user;
  
      const createdUser = await this.userRepository.save(user);
  
      return createdUser;
    }
}
