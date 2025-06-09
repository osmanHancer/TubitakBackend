import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CiktilarEntity } from './cikti.entity';
import { CiktilarDTO } from './cikti.dto';

@Injectable()
export class CiktilarService {

    constructor(
        @InjectRepository(CiktilarEntity)
        private kaynakcaRepository: Repository<CiktilarEntity>
      ) {}

    

  async readAll() {
    
    return await this.kaynakcaRepository.find();
  }

  async create(data: CiktilarDTO) {
    const yapimonografisi = this.kaynakcaRepository.create(data);
    await this.kaynakcaRepository.save(data)

    return yapimonografisi;
    
  }


}
