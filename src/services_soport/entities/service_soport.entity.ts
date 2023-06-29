import { ClientEntity } from 'src/client/entities/client.entity';
import { TechnicalEntity } from 'src/technical/entities/technical.entity';
import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, Column } from 'typeorm';

@Entity()
export class ServiceSoportEntity{

    @PrimaryGeneratedColumn()
    id:number

    @ManyToMany(() => TechnicalEntity)
    @JoinTable()
    id_technical: number

    @ManyToMany(() => ClientEntity)
    @JoinTable()
    id_client: number

    @Column()
    token: string

    @Column()
    date_start_service: Date

    @Column()
    date_finish_service: Date

    @Column()
    calification_service: number
}