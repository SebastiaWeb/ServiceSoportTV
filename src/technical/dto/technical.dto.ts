import { IsNumber, IsString } from 'class-validator';

export class TechnicalDTO {
    @IsNumber()
    id: number;
  
    @IsNumber()
    id_user: number;

    @IsString()
    rol: string
  }