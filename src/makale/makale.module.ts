import { Module } from '@nestjs/common';
import { MakaleService } from './makale.service';
import { MakaleController } from './makale.controller';
import { MakaleEntity } from './makale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MakaleEntity])],
  controllers: [MakaleController],
  providers: [MakaleService],
})
export class MakaleModule {}
