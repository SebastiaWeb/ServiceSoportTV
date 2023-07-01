import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';

export class ServiceSoportDTO {

    @IsNumber()
    @ApiProperty()
    id_technical: number

    @IsNumber()
    @ApiProperty()
    id_client: number

    @IsString()
    @ApiProperty()
    token: string

    @IsDate()
    @ApiProperty()
    date_start_service: Date

    @IsDate()
    @ApiProperty()
    date_finish_service: Date

    @IsNumber()
    @ApiProperty()
    calification_service: number

    @IsString()
    @ApiProperty()
    servicio_prestado:string
}