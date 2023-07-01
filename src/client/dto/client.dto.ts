import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ClientDTO {
    @IsNumber()
    @ApiProperty()
    id: number;
  
    @IsNumber()
    @ApiProperty()
    id_user: number;

    @IsString()
    @ApiProperty()
    street: string;
  }