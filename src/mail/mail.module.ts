// mail.module.ts
import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from 'services/mail.service';

@Module({
  providers: [MailService], // MailService provider olarak burada tanımlanıyor
  controllers: [MailController],
  exports: [MailService], // Diğer modüllerde kullanılabilmesi için export ediliyor
})
export class MailModule {}
