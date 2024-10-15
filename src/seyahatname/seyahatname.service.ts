import { Injectable } from '@nestjs/common';
import { CreateSeyahatnameDto } from './create-seyahatname.dto';
import { SeyahatnameEntity } from './seyahatname.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SeyahatnameService {

  constructor(
    @InjectRepository(SeyahatnameEntity)
    private seyahatnameRepository: Repository<CreateSeyahatnameDto>
  ) {}
  
  async create(data: CreateSeyahatnameDto) {
    const user = this.seyahatnameRepository.create(data);
    await this.seyahatnameRepository.save(user);
    return user;
  }

  async findAll() {
    return await this.seyahatnameRepository.find();
  }

  async findOne(id: number) {
    return await this.seyahatnameRepository.findOne({ where: { Id: id } });
  }

  update(id: number, updateSeyahatnameDto: CreateSeyahatnameDto) {
    return `This action updates a #${id} seyahatname`;
  }

  async remove(id: number) {
    await this.seyahatnameRepository.delete({Id:id});
  }
}
