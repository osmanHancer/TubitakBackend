import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KaynakcaEntity } from './kaynakca.entity';
import { KayncakcaDTO } from './kaynakca.dto';

@Injectable()
export class KaynakcaService {

    constructor(
        @InjectRepository(KaynakcaEntity)
        private kaynakcaRepository: Repository<KaynakcaEntity>
      ) {}

      


  async readAll() {
    
    return await this.kaynakcaRepository.find();
  }

  async create(data: KayncakcaDTO) {
    const yapimonografisi = this.kaynakcaRepository.create(data);
    await this.kaynakcaRepository.save(data)

    return yapimonografisi;
    
  }


}
