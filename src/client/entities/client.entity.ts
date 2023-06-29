import {User} from '../../user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class ClientEntity{

    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(()=> User)
    @JoinColumn()
    id_user: number

}