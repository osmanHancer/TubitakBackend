import { HttpStatus } from '@nestjs/common';
import { NoktaService } from './nokta.service';
import { NoktaDTO } from './nokta.dto';
export declare class NoktaController {
    private usersService;
    constructor(usersService: NoktaService);
    getTop10Locations(): Promise<any[]>;
    getTop10Seyyahs(): Promise<any[]>;
    readSeyyah(seyahname_kodu: string, id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./nokta.entity").NoktaEntity[];
    }>;
    readAllSeyyah(seyahname_kodu: string, id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./nokta.entity").NoktaEntity[];
    }>;
    findAlintilar(enlem: number, boylam: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        Id: import("./nokta.entity").NoktaEntity[];
    }>;
    readAllUsers(): Promise<{
        statusCode: HttpStatus;
        message: string;
        users: import("./nokta.entity").NoktaEntity[];
    }>;
    uppdateUser(data: NoktaDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteUser(id: number, kod: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
