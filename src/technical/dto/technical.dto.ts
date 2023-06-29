import { IsNumber } from 'class-validator';

export class TechnicalDTO {
    @IsNumber()
    id: number;
  
    @IsNumber()
    id_user: number;
  }