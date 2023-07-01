import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import {User} from '../../user/entities/user.entity';
import { ServiceSoportEntity } from '../../services_soport/entities/service_soport.entity'

@Entity()
export class TechnicalEntity{

    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(()=> User)
    @JoinColumn()
    id_user: number

    @Column()
    rol: string

}