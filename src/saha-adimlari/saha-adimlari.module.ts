import { Module } from '@nestjs/common';
import { SahaAdımlarıService } from './saha-adimlari.service';
import { SahaAdımlarıController } from './saha-adimlari.controller';
import { SahaAdımlarıEntity } from './saha-adimlari.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SahaAdımlarıEntity])],
  controllers: [SahaAdımlarıController],
  providers: [SahaAdımlarıService],
})
export class SahaAdımlarıModule {}
