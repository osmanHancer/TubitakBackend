import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendEmailDto {
  @IsEmail()
  mail: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  text: string;
}
