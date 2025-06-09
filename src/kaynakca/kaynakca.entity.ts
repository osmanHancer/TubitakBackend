import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique } from "typeorm";

@Entity('kaynakca')
export class KaynakcaEntity {
  @Column('text')
  Seyahatnameler: string;

  @Column('text')
  Konaklama_ve_Seyahat_Kulturu: string;

  @Column('text')
  Mimari_Sanat_ve_Tarih: string;

  @Column('text')
  Diger: string;

  @PrimaryColumn()
  id: string;



}