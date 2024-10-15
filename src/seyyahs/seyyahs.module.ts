import { Module } from '@nestjs/common';
import { SeyyahsService } from './seyyahs.service';
import { SeyyahsController } from './seyyahs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeyyahsEntity } from './seyyahs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeyyahsEntity])],
  providers: [SeyyahsService],
  controllers: [SeyyahsController],
})
export class SeyyahsModule {}
