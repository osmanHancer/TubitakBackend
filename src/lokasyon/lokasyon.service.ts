import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LokasyonEntity } from './lokasyon.entity';
import { LokasyonDTO } from './lokasyon.dto';

@Injectable()
export class lokasyonsService {
  constructor(
    @InjectRepository(LokasyonEntity)
    private usersRepository: Repository<LokasyonEntity>
  ) { }

  async create(data: LokasyonDTO) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(user);
    return user;
  }

  async read(id: number) {
    return await this.usersRepository.findOne({ where: { Id: id } });
  }

  async findId(id: string) {
    return (await this.usersRepository.findOne({ where: { Envanter_Kodu: id } })).Id;
  }
  async findIdEnlemBoylam(enlem: number,boylam:number) {
    return (await this.usersRepository.findOne({ where: { Enlem: enlem ,Boylam:boylam } }));
  }


 

  async readAll() {
    return await this.usersRepository.find();
  }


  // async update(Id: number, data: LokasyonDTO) {
  //   await this.usersRepository.update({ Id:Id }, data);
  //   return await this.usersRepository.findOne({ where: { Id: Id } });
  // }

  async delete(id: number) {
    await this.usersRepository.delete({ Id: id });
    return { deleted: true };
  }
}