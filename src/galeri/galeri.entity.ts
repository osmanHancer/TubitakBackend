import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('galeri')
export class GaleriEntity {


    @PrimaryColumn()
    imgname: string;

    @Column()
    envanterNo:string

    @Column()
    metin: string;
  


 
}



