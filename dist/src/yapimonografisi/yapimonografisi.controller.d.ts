import { HttpStatus } from '@nestjs/common';
import { YapimonografisiService } from './yapimonografisi.service';
import { YapiMonografisiDTO } from './yapimonografisi.dto';
export declare class YapimonografisiController {
    private YapimonografisiService;
    constructor(YapimonografisiService: YapimonografisiService);
    read(yapi_ismi: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./yapimonografisi.entity").YapiMonografisiEntity;
    }>;
    readAll(): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./yapimonografisi.entity").YapiMonografisiEntity[];
    }>;
    createUser(data: YapiMonografisiDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteUser(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
