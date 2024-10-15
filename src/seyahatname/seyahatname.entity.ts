import { Type } from "class-transformer";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('seyahatname')
export class SeyahatnameEntity {

    
    @PrimaryGeneratedColumn('increment')
    Id : number;
  
    @Column()
    Yazar: string;
  
    @PrimaryColumn()
    SeyahatnameKodu  : string;

    @Column()
    yuzyil:string

}
