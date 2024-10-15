// src/auth/local.strategy.ts
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // Varsayılan olarak 'username' ve 'password' kullanılır, bu nedenle
    // 'usernameField' ve 'passwordField' ayarlamanız gerekir.
    super({
      usernameField: 'mail', // 'mail' alanını kullanıcı adı olarak kullan
      passwordField: 'password', // 'password' alanını şifre olarak kullan
    });
  }

  async validate(mail: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(mail, password);
    
    // Eğer kullanıcı bulunamazsa veya bir hata mesajı dönerse hata fırlat
    if (!user) {
      throw new UnauthorizedException('Giriş bilgileri geçersiz');
    }
    
    return user; // Kullanıcı doğrulandıysa, kullanıcı nesnesini döner
  }
}
