import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditorEntity } from './editor.entity';
import { EditornDTO } from './editor.dto';

@Injectable()
export class editorsService {
  constructor(
    @InjectRepository(EditorEntity)
    private editorRepository: Repository<EditorEntity>
  ) { }

  async create(data: EditornDTO) {
    const user = this.editorRepository.create(data);
    await this.editorRepository.save(user);
    return user;
  }

  async getAll() {
    const user = this.editorRepository.find();
    return user;
  }


 

 

 
}