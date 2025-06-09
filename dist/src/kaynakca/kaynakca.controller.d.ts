import { HttpStatus } from '@nestjs/common';
import { KaynakcaService } from './kaynakca.service';
import { KayncakcaDTO } from './kaynakca.dto';
export declare class KaynakcaController {
    private YapimonografisiService;
    constructor(YapimonografisiService: KaynakcaService);
    readAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./kaynakca.entity").KaynakcaEntity[];
    }>;
    createUser(data: KayncakcaDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
