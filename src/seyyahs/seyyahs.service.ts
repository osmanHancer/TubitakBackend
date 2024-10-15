import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeyyahsEntity } from './seyyahs.entity';
import { SeyyahDTO } from './seyyahs.dto';
@Injectable()
export class SeyyahsService {

    constructor(
        @InjectRepository(SeyyahsEntity)
        private seyyahsRepository: Repository<SeyyahDTO>
      ) {}

      async readAll() {
    
        return await this.seyyahsRepository.find();
      }
      async read(id:number) {
    
        return await this.seyyahsRepository.findOne({ where: { id: id } });
      }
      async update(id: number, data: SeyyahDTO) {
        await this.seyyahsRepository.update({ id }, data);
        return await this.seyyahsRepository.findOne({ where: { id: id ,name :data.name} });
      }

      async create(data: SeyyahDTO) {
        const user = this.seyyahsRepository.create(data);
        await this.seyyahsRepository.save(user);
        return user;
      }

       async delete(id: number) {
     await this.seyyahsRepository.delete({ id });
     return { deleted: true };
  }
}
