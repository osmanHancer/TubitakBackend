import { HttpStatus } from '@nestjs/common';
import { SahaAdımlarıService } from './saha-adımları.service';
import { SahaAdımlarıDto } from './create-saha-adimlari.dto';
export declare class SahaAdımlarıController {
    private readonly sahaAdımlarıService;
    constructor(sahaAdımlarıService: SahaAdımlarıService);
    create(createSahaAdımlarıDto: SahaAdımlarıDto): Promise<SahaAdımlarıDto>;
    delete(deleteSahaAdımlarıDto: SahaAdımlarıDto): Promise<{
        deleted: boolean;
    }>;
    findAllSaha(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: any[];
    }>;
    findAll(saha_ismi: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: SahaAdımlarıDto[];
    }>;
    update(id: string, updateSahaAdımlarıDto: SahaAdımlarıDto): string;
}
