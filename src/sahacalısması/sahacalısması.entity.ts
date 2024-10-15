import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('sahacalısması')
export class SahacalısmasıEntity {

@Column()
 LokasyonId:number;


 @Column()
 Sahaismi:string;

 @PrimaryGeneratedColumn('increment')
 id:number;








}
