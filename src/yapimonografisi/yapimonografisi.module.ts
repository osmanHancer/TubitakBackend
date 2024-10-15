import { Module } from '@nestjs/common';
import { YapimonografisiService } from './yapimonografisi.service';
import { YapimonografisiController } from './yapimonografisi.controller';
import { YapiMonografisiEntity } from './yapimonografisi.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([YapiMonografisiEntity])],
  providers: [YapimonografisiService],
  controllers: [YapimonografisiController]
})
export class YapimonografisiModule {}
