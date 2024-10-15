import { Module } from '@nestjs/common';
import { SeyahatnameService } from './seyahatname.service';
import { SeyahatnameController } from './seyahatname.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeyahatnameEntity } from './seyahatname.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeyahatnameEntity])],
  controllers: [SeyahatnameController],
  providers: [SeyahatnameService],
})
export class SeyahatnameModule {}
