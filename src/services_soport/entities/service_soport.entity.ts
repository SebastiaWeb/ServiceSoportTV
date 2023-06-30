import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, Column } from 'typeorm';
import { TechnicalEntity } from 'src/technical/entities/technical.entity';
import { ClientEntity } from 'src/client/entities/client.entity';

@Entity()
export class ServiceSoportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => TechnicalEntity, { cascade: true })
  @JoinTable()
  technicals: TechnicalEntity[];

  @ManyToMany(() => ClientEntity, { cascade: true })
  @JoinTable()
  clients: ClientEntity[];

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
}