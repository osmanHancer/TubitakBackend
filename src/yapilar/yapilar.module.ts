import { Module } from '@nestjs/common';
import { YapilarService } from './yapilar.service';
import { YapilarController } from './yapilar.controller';
import { YapilarEntity } from './yapilar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([YapilarEntity])],
  providers: [YapilarService],
  controllers: [YapilarController]
})
export class YapilarModule {}
