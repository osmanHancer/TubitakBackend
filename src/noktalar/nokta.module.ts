import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoktaEntity } from './nokta.entity';
import { NoktaController } from './nokta.controller';
import { NoktaService } from './nokta.service';

@Module({
  imports: [TypeOrmModule.forFeature([NoktaEntity])],
  controllers: [NoktaController],
  providers: [NoktaService],

})
export class NoktaModule {}