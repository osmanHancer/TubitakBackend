import { Module } from '@nestjs/common';
import { GaleriService } from './galeri.service';
import { GaleriController } from './galeri.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleriEntity } from './galeri.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GaleriEntity])],
  providers: [GaleriService],
  controllers: [GaleriController]
})
export class GaleriModule {}
