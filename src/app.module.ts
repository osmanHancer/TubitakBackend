import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoktaModule } from './noktalar/nokta.module';
import { LokasyonModule } from './lokasyon/lokasyon.module';
import { SeyyahsModule } from './seyyahs/seyyahs.module';
import { YapilarModule } from './yapilar/yapilar.module';
import { YapimonografisiModule } from './yapimonografisi/yapimonografisi.module';
import { FileuploadModule } from './fileupload/fileupload.module';
import { GaleriModule } from './galeri/galeri.module';
import { MakaleModule } from './makale/makale.module';
import { SahacalısmasıModule } from './sahacalısması/sahacalısması.module';
import { SahaAdımlarıModule } from './saha-adımları/saha-adımları.module';
import { SeyahatnameModule } from './seyahatname/seyahatname.module';
import { ArazicalismasiModule } from './arazicalismasi/arazicalismasi.module';
import { AllcordinatsModule } from './allcordinats/allcordinats.module';
import { MailModule } from './mail/mail.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
  	"type": "mysql",
  	"host": "localhost",
  	"port": 3306,
  	"username": "root",
  	"password": "",
  	"database": "test",
	"timezone":"Z",
  	"synchronize": true,
  	"entities": ["dist/**/*.entity.js"]
	
  }), NoktaModule,AuthModule, LokasyonModule,UserModule, SeyyahsModule,MailModule,YapilarModule, YapimonografisiModule, FileuploadModule, GaleriModule,MakaleModule, SeyahatnameModule, SahacalısmasıModule, SahaAdımlarıModule, ArazicalismasiModule, AllcordinatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}