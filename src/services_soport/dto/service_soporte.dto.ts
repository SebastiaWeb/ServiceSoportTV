import { IsNumber, IsString, IsDate } from 'class-validator';

export class ServiceSoportDTO {

    @IsNumber()
    id: number

    @IsNumber()
    id_technical: number

    @IsNumber()
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