import { IsNumber, IsString } from 'class-validator';

export class ClientDTO {
    @IsNumber()
    id: number;
  
    @IsNumber()
    id_user: number;

    @IsString()
    street: string;
  }