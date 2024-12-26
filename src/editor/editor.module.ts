import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditorEntity } from './editor.entity';
import { editorController } from './editor.controller';
import { editorsService } from './editor.service';

@Module({
  imports: [TypeOrmModule.forFeature([EditorEntity])],
  controllers: [editorController],
  providers: [editorsService],

})
@Module({})
export class EditorModule {}
