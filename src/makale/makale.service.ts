import { Injectable } from '@nestjs/common';
import { MakaleEntity } from './makale.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MakaleDTO } from './create-makale.dto';

@Injectable()
export class MakaleService {

  constructor(
    @InjectRepository(MakaleEntity)
    private usersRepository: Repository<MakaleEntity>
  ) {}
  async create(createMakaleDto: MakaleDTO) {
    
    const user = this.usersRepository.create(createMakaleDto);
    await this.usersRepository.save(user);
    return user;
  }

  async findAll() {
    return await this.usersRepository.find();
  }

 async  findOne(kodu: string) {
    return await this.usersRepository.findOne({ where: { kodu: kodu } })
  }



 async remove(id: string) {
  return await this.usersRepository.delete({kodu:id})

  }
}
