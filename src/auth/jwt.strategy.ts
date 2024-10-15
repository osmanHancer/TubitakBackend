// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'osman', // Auth modülündeki ile aynı olmalı
    });
  }

  async validate(payload: any) {
    return { mail: payload.mail, name: payload.name  }; // Burada mail ve username'i de ekleyin
  }
  
}
