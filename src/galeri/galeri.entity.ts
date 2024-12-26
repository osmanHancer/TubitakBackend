import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('galeri')
export class GaleriEntity {

    @Column()
    envanterNo:string

    @PrimaryColumn()
    imgname: string;

    @Column()
    metin: string;
  


 
}



