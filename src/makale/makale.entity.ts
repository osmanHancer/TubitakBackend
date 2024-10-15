import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('makale')

export class MakaleEntity {

    @Column()
    seyahatnameadi: string;

    @Column('text')
    metin: string;
  
    @PrimaryColumn()
    kodu : string;

    @Column()
    yuzyil:string

    
    @Column()
    seyyah:string

}


