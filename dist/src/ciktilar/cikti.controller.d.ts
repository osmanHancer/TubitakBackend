import { HttpStatus } from '@nestjs/common';
import { CiktilarService } from './cikti.service';
import { CiktilarDTO } from './cikti.dto';
export declare class CiktilarController {
    private YapimonografisiService;
    constructor(YapimonografisiService: CiktilarService);
    readAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./cikti.entity").CiktilarEntity[];
    }>;
    createUser(data: CiktilarDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
