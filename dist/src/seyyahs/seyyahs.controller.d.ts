import { HttpStatus } from '@nestjs/common';
import { SeyyahsService } from './seyyahs.service';
import { SeyyahDTO } from './seyyahs.dto';
export declare class SeyyahsController {
    private seyyahsService;
    constructor(seyyahsService: SeyyahsService);
    readAllUsers(): Promise<{
        statusCode: HttpStatus;
        message: string;
        users: SeyyahDTO[];
    }>;
    readUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
        lokasyon: SeyyahDTO;
    }>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    createUser(data: SeyyahDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
