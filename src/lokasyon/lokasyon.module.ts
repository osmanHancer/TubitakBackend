import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LokasyonEntity } from './lokasyon.entity';
import { lokasyonsController } from './lokasyon.controller';
import { lokasyonsService } from './lokasyon.service';

@Module({
  imports: [TypeOrmModule.forFeature([LokasyonEntity])],
  controllers: [lokasyonsController],
  providers: [lokasyonsService],

})
@Module({})
export class LokasyonModule {}
