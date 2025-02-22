import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {

  @PrimaryColumn({ unique: true })
  mail: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  
  @Column()
  hashedPassword: string;

  @Column({ nullable: true })
  imgname: string | null;
  

}
