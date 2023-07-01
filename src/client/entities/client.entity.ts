import {User} from '../../user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';

@Entity('Client')
export class ClientEntity{

    @PrimaryGeneratedColumn()
    id:number

    @OneToOne(()=> User)
    @JoinColumn()
    id_user: number

    @Column()
    street: string

}