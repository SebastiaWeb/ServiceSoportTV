import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import {User} from '../../user/entities/user.entity';

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