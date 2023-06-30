import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';

export class ServiceSoportDTO {

    @IsNumber()
    id_technical: number

    @IsNumber()
    @ApiProperty()
    id_client: number

    @IsString()
    token: string

    @IsDate()
    date_start_service: Date

    @IsDate()
    date_finish_service: Date

    @IsNumber()
    calification_service: number
}