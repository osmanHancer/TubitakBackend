import { Module } from '@nestjs/common';
import { KaynakcaService } from './kaynakca.service';
import { KaynakcaController } from './kaynakca.controller';
import { KaynakcaEntity } from './kaynakca.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KaynakcaEntity])],
  providers: [KaynakcaService],
  controllers: [KaynakcaController]
})
export class KaynakcaModule {}
