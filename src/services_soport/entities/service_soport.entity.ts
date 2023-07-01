import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, Column,OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { TechnicalEntity } from 'src/technical/entities/technical.entity';
import { ClientEntity } from 'src/client/entities/client.entity';

@Entity('ServiceSoport')
export class ServiceSoportEntity {
  @PrimaryGeneratedColumn() 
  id: number;

  @ManyToMany(() => TechnicalEntity, { cascade: true })
  @JoinTable()
  technicals: TechnicalEntity[];

  @ManyToOne(() => ClientEntity, client => client.id)
  @JoinColumn({ name: 'id_client' })
  id_client: number; 

  @Column()
  token: string;

  @Column()
  date_start_service: Date;

  @Column()
  date_finish_service: Date;

  @Column()
  calification_service: number;

  @Column()
  servicio_prestado: string

  @ManyToOne(() => TechnicalEntity, {cascade: true})
  @JoinColumn({ name: 'id_technical' })
  id_technical: TechnicalEntity;

}