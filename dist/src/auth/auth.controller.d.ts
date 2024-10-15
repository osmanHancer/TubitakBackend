import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginData: {
        mail: string;
        password: string;
    }): Promise<{
        access_token: string;
        success: boolean;
    }>;
    verifyToken(req: any): {
        valid: boolean;
        user: any;
    };
}
