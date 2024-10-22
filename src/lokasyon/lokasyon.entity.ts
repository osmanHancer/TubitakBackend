import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('lokasyon')
export class LokasyonEntity {

  @Column()
  Lokasyon_Adi: string;

  @Column()
  Mekanin_Gunumuzdeki_Adi: string;

  @Column("double", { precision: 16, scale: 14 })
  Enlem: number;

  @Column("double", { precision: 16, scale: 14 })
  Boylam: number;

  @Column()
  Olcek: string;

  @Column()
  mekan_adi: string;

  @PrimaryGeneratedColumn('increment')
  Id: number;

  @Column()
  Envanter_Kodu: string;

}
