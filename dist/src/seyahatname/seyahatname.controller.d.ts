import { HttpStatus } from '@nestjs/common';
import { SeyahatnameService } from './seyahatname.service';
import { CreateSeyahatnameDto } from './create-seyahatname.dto';
export declare class SeyahatnameController {
    private readonly seyahatnameService;
    constructor(seyahatnameService: SeyahatnameService);
    create(createSeyahatnameDto: CreateSeyahatnameDto): Promise<CreateSeyahatnameDto>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        users: CreateSeyahatnameDto[];
    }>;
    findOne(id: string): Promise<CreateSeyahatnameDto>;
    update(id: string, updateSeyahatnameDto: CreateSeyahatnameDto): string;
    remove(id: string): Promise<void>;
}
