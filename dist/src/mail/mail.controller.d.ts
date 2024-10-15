import { HttpStatus } from '@nestjs/common';
import { MailService } from 'services/mail.service';
import { SendEmailDto } from './mail.dto';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    create(data: SendEmailDto): {
        statusCode: HttpStatus;
        message: string;
        data: SendEmailDto;
    };
}
