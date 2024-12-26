import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('editor')
export class EditorEntity {


  @PrimaryGeneratedColumn('increment')
  Id: number;

  @Column('text')
  hakkinda: string;

  @Column('text')
  amaclar: string;

  @Column('text')
  sahacalismalari: string;

  @Column('text')
  projeciktilari: string;
}
