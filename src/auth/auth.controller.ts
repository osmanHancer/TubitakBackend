import { Controller, Post, Body, UseGuards, UnauthorizedException, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard) // Kullanıcı giriş isteği için kimlik doğrulama
  async login(@Body() loginData: { mail: string; password: string }) {
    const user = await this.authService.validateUser(loginData.mail, loginData.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return this.authService.login(user); // Bu yerden dönen token'ı kontrol edin
  }
  
  @Get('verify-token')
  @UseGuards(AuthGuard('jwt')) // JWT stratejisini kullanıyoruz
  verifyToken(@Req() req: any) {
    // Token geçerliyse buraya ulaşılır
    return { valid: true, user: req.user };
  }
}
