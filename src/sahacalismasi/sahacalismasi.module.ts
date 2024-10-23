import { Module } from '@nestjs/common';
import { SahacalısmasıService } from './sahacalismasi.service';
import { SahacalısmasıController } from './sahacalismasi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SahacalısmasıEntity } from './sahacalismasi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SahacalısmasıEntity])],
  controllers: [SahacalısmasıController],
  providers: [SahacalısmasıService],
})
export class SahacalısmasıModule {}
