import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(mail: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        success: boolean;
    }>;
}
