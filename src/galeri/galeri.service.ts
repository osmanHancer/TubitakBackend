import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GaleriEntity } from './galeri.entity';
import { Repository } from 'typeorm';
import { GaleriDTO } from './galeri.dto';

@Injectable()
export class GaleriService {
    constructor(
        @InjectRepository(GaleriEntity)
        private usersRepository: Repository<GaleriEntity>
      ) {}


      async create(data: GaleriDTO) {
        
        const galeri = this.usersRepository.create(data);
        await this.usersRepository.save(galeri);
        return galeri;
      }

      async readAll() {
        return await this.usersRepository.find();
      }
      
      async read(imgname:any) {
        return await this.usersRepository.findOne({ where: { imgname: imgname } });
      }
      
      async readAllId(ıd:any) {
        return await this.usersRepository.find({ where: { envanterNo: ıd } });
      }

      async delete(imgname:string){
        await this.usersRepository.delete(imgname);
      }
      
      
  //   async update(imgname: string, data: GaleriDTO) {
  //   await this.usersRepository.update({ imgname:imgname }, data);
  //   return await this.usersRepository.findOne({ where: { imgname: imgname } });
  // }
}
