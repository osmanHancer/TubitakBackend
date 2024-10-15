import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('allpoint')
export class NoktaEntity {



  @Column()
  seyahatname_adi: string;

  @Column()
  yuzyil: string;

  @PrimaryColumn({ unique: true })
  seyahname_kodu: string;

  @Column()
  yazar: string;

  @Column()
  bolum_chapter_mektupnumarasi: string;

  @Column()
  sayfa_numarasi: number;

  @Column('double')
  seyahat_adimi: number;

  @Column()
  anlatida_gecen_mekan_adi: string;

  @Column()
  mekanin_gunumuzdeki_adi: string;

  @Column('double', { precision: 16, scale: 14 })
  enlem: number;

  @Column('double', { precision: 16, scale: 14 })
  boylam: number;

  @Column()
  tespit_edilen_konum_olcegi: string;

  @Column()
  mekan_tipi: string;

  @Column()
  konaklanma_durumu: string;

  @Column()
  yapi_envanter_kodu: string;

  @Column('text')
  alintilar: string;

  @Column('text')
  notlar: string;

  @Column('text')
  rota_notlari: string;

  @Column()
  deniz_yoluyla_ulasim: string;


  @PrimaryColumn({ unique: true })
  id: number;



}