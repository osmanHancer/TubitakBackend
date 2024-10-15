import { HttpStatus } from '@nestjs/common';
import { lokasyonsService } from './lokasyon.service';
import { LokasyonDTO } from './lokasyon.dto';
export declare class lokasyonsController {
    private lokasyonService;
    constructor(lokasyonService: lokasyonsService);
    createUser(data: LokasyonDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        lokasyon: import("./lokasyon.entity").LokasyonEntity;
    }>;
    readAlllokasyons(): Promise<{
        statusCode: HttpStatus;
        message: string;
        lokasyon: import("./lokasyon.entity").LokasyonEntity[];
    }>;
    readLokasyons(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        lokasyon: import("./lokasyon.entity").LokasyonEntity;
    }>;
    findLokasyon(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        Id: number;
    }>;
    findLokasyonEnlemBoylam(enlem: number, boylam: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        result: import("./lokasyon.entity").LokasyonEntity;
    }>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
