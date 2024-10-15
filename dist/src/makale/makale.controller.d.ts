import { HttpStatus } from '@nestjs/common';
import { MakaleService } from './makale.service';
import { MakaleDTO } from './create-makale.dto';
export declare class MakaleController {
    private readonly makaleService;
    constructor(makaleService: MakaleService);
    create(createmakaleDto: MakaleDTO): Promise<import("./makale.entity").MakaleEntity>;
    findAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        makale: import("./makale.entity").MakaleEntity[];
    }>;
    findOne(kodu: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        makale: import("./makale.entity").MakaleEntity;
    }>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
