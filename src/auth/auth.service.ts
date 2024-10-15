// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(mail: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(mail,password);
    if(user.user!=null){
      return user;
    }
    return null;
  }

  async login(user: any) {
    // Burada payload'a userId ve username ekliyoruz.
    const payload = { mail: user.user.mail, name: user.user.name }; // user.username ekleyin, user.id olarak da user.user.id'yi alabilirsiniz
    return {
      access_token: this.jwtService.sign(payload),
      success:true
    };
  }
  
}
