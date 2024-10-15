import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { MailService } from 'services/mail.service';
import { SendEmailDto } from './mail.dto';

@Controller('mail')
export class MailController {

    constructor(private readonly mailService: MailService) {}

    @Post()
    create(@Body() data: SendEmailDto) {
       this.mailService.sendEmail(data.mail, data.subject, data.text);

      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data,
      };
    }
    
}
// KERVANSARAY / HAN
// ÖZEL MÜLK
// MİSAFİRHANE / OTEL / PANSİYON
// AÇIK ALANDA KONAKLAMA 
// YERLEŞİM YERİ
// TANIMLANMAYAN MEKAN
// DİNİ YAPI
// ASKERİ VE GÜVENLİĞE İLİŞKİNYAPILAR
// DİĞER
//sayfa numarası
//bölüm numarası
//cilt numarası