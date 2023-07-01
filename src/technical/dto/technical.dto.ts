import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ServiceSoportEntity } from 'src/services_soport/entities/service_soport.entity';

export class TechnicalDTO {
    @IsNumber()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    suports?: ServiceSoportEntity[];
  
    @IsNumber()
    @ApiProperty()
    id_user: number;

    @IsString()
    @ApiProperty()
    rol: string
  }