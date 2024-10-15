import { Injectable } from '@nestjs/common';
import { YapilarEntity } from './yapilar.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class YapilarService {

    constructor(
        @InjectRepository(YapilarEntity)
        private usersRepository: Repository<YapilarEntity>
      ) {}

    
  async readAll() {
    
    return await this.usersRepository.find();
  }
}
