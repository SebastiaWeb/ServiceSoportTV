import { IsNumber } from 'class-validator';

export class ClientDTO {
    @IsNumber()
    id: number;
  
    @IsNumber()
    id_user: number;
  }