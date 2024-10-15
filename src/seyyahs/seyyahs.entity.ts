import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('seyyah')
export class SeyyahsEntity {


    @Column()
    yuzyil: string;

    @Column()
    name: string;

    @Column()
    tarih: string;

    @Column()
    anadil: string;

    @Column()
    ceviri: string;

    @Column('text')
    notlar: string;

    @PrimaryGeneratedColumn('increment')
    id : number;


  
}
