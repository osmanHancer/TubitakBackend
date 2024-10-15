
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('yapilar')
export class YapilarEntity {


  @Column()
  ana_guzergah: string;

  @Column()
  guzergah_kesimi : string;

  @Column()
  bulundugu_sehir : string;

  @Column()
  yapinin_adi : string;

  @Column()
  yapinin_donemi : string;

  @PrimaryColumn()
  envanter_kodu : string;

  @Column()
  yapım_yılı_yada_yuzyılı : string;

  @Column()
  bilinen_banisi : string;

  @Column()
  güncel_durum : string;

  @Column()
  enlem : string;

  @Column()
  boylam : string;

  @Column()
  kesinlik : string;

  @Column()
  notlar : string;

  @Column()
  online_kaynak : string;

  @Column()
  cizimler : string;

  @Column()
  görseller : string;

  @Column()
  anahtar_kelimeler : string;

  @Column()
  literatur_taramasi : string;

  @Column()
  klasor_baglantısı : string;

  @Column()
  kültür_envanteri_listesi : string;

  @Column()
  arsiv_ekibi : string;

}