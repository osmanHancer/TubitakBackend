import { Module } from '@nestjs/common';
import { SahaAdımlarıService } from './saha-adımları.service';
import { SahaAdımlarıController } from './saha-adımları.controller';
import { SahaAdımlarıEntity } from './saha-adımları.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SahaAdımlarıEntity])],
  controllers: [SahaAdımlarıController],
  providers: [SahaAdımlarıService],
})
export class SahaAdımlarıModule {}
