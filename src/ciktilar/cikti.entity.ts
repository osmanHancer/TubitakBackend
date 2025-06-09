import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique } from "typeorm";

@Entity('ciktilar')
export class CiktilarEntity {
  @Column('longtext')
  ciktilar: string;

  @PrimaryColumn()
  id: string;



}