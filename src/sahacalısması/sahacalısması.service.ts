import { Injectable } from '@nestjs/common';
import { CreateSahacalısmasıDto } from './create-sahacalısması.dto';
import { Repository } from 'typeorm';
import { SahacalısmasıEntity } from './sahacalısması.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SahacalısmasıService {

  constructor(
    @InjectRepository(SahacalısmasıEntity)
    private sahaRepository: Repository<CreateSahacalısmasıDto>
  ) {}

 async create(createSahacalısmasıDto: CreateSahacalısmasıDto) {
    const user = this.sahaRepository.create(createSahacalısmasıDto);
    await this.sahaRepository.save(user)
    return user;
  }

  async findAll() {
    return await this.sahaRepository.find();
  }

 async findOne(sahaismi: string) {
    return await this.sahaRepository.findOne({ where: { Sahaismi: sahaismi } });
    }

  update(id: number, updateSahacalısmasıDto: CreateSahacalısmasıDto) {
    return `This action updates a #${id} sahacalısması`;
  }

  async  remove(sahaismi: string) {
    await this.sahaRepository.delete({ Sahaismi:sahaismi});
    return { deleted: true };
  }
}
