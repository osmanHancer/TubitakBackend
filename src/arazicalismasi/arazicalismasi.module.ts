import { Module } from '@nestjs/common';
import { ArazicalismasiService } from './arazicalismasi.service';
import { ArazicalismasiController } from './arazicalismasi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArazicalismasiEntity } from './arazicalismasi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArazicalismasiEntity])],
  controllers: [ArazicalismasiController],
  providers: [ArazicalismasiService],
})
export class ArazicalismasiModule {}
