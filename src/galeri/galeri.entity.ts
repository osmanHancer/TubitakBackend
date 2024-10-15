import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('galeri')
export class GaleriEntity {

    @Column()
    metin: string;
  
    @PrimaryColumn()
    imgname: string;


    @Column()
    lokasyonId:string
}



