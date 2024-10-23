import { Type } from "class-transformer";
import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('sahadımları')
export class SahaAdımlarıEntity {

    
    @PrimaryColumn()
    sahacalismasiadi:string

    
    @Column()
    LokasyonId: number;


    @Column()
    not: string;


    @PrimaryColumn()
    adimNo: number;

}
