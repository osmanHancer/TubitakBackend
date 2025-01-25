import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Unique } from "typeorm";

@Entity('yapimonografisi')
export class YapiMonografisiEntity {
  @Column('text')
  yapi_html_1: string;

  @Column('text')
  yapi_html_2: string;

  @Column('text')
  yapi_html_3: string;

  @Column('text')
  yapi_html_4: string;

  @Column('text')
  yapi_html_5: string;

  @Column('text')
  yapi_html_6: string;

  @Column()
  lokasyonId:number

  @Column()
  baslik: string;

  @Column()
  alt_baslik: string;

  @Column()
  enlem: string;

  @Column()
  boylam: string;

  
  @Column()
  yuzyil: string;
  
  
  @Column()
  yapituru: string;

  @Column()
  seyahatnamede_gecen: string;

  
  @PrimaryColumn()
  yapi_ismi: string;



}