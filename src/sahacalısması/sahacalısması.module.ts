import { Module } from '@nestjs/common';
import { SahacalısmasıService } from './sahacalısması.service';
import { SahacalısmasıController } from './sahacalısması.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SahacalısmasıEntity } from './sahacalısması.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SahacalısmasıEntity])],
  controllers: [SahacalısmasıController],
  providers: [SahacalısmasıService],
})
export class SahacalısmasıModule {}
