import { Module } from '@nestjs/common';
import { AllcordinatsService } from './allcordinats.service';
import { AllcordinatsController } from './allcordinats.controller';

@Module({
  controllers: [AllcordinatsController],
  providers: [AllcordinatsService],
})
export class AllcordinatsModule {}
