import { Module } from '@nestjs/common';
import { CiktilarService } from './cikti.service';
import { CiktilarController } from './cikti.controller';
import { CiktilarEntity } from './cikti.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CiktilarEntity])],
  providers: [CiktilarService],
  controllers: [CiktilarController]
})
export class CiktiModule {}
