import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { YapiMonografisiEntity } from './yapimonografisi.entity';
import { YapiMonografisiDTO } from './yapimonografisi.dto';

@Injectable()
export class YapimonografisiService {

    constructor(
        @InjectRepository(YapiMonografisiEntity)
        private yapimonografisiRepository: Repository<YapiMonografisiEntity>
      ) {}

      
  async read(yapi_ismi:string) {
    
    return await this.yapimonografisiRepository.findOne({ where: { yapi_ismi: yapi_ismi} });
  }

  async readAll() {
    
    return await this.yapimonografisiRepository.find();
  }

  async create(data: YapiMonografisiDTO) {
    const yapimonografisi = this.yapimonografisiRepository.create(data);
    await this.yapimonografisiRepository.save(data)

    return yapimonografisi;
    
  }

  async delete(id:string) {
    console.log(id)
    return await this.yapimonografisiRepository.delete(id);
  }
}
