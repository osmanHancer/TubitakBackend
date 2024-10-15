import { Injectable } from '@nestjs/common';
import { CreateArazicalismasiDto } from './create-arazicalismasi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArazicalismasiEntity } from './arazicalismasi.entity';

@Injectable()
export class ArazicalismasiService {


  constructor(
    @InjectRepository(ArazicalismasiEntity)
    private araziRepository: Repository<CreateArazicalismasiDto>
  ) {}
  
  create(createArazicalismasiDto: CreateArazicalismasiDto) {
    return 'This action adds a new arazicalismasi';
  }

  findAll() {
    return `This action returns all arazicalismasi`;
  }

  async findOne(id: string) {
    return await this.araziRepository.findOne({ where: { Envanter_Kodu: id } });
  }

 

  remove(id: number) {
    return `This action removes a #${id} arazicalismasi`;
  }
}
