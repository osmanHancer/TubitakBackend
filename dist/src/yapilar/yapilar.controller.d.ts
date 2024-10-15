import { HttpStatus } from '@nestjs/common';
import { YapilarService } from './yapilar.service';
export declare class YapilarController {
    private yapilarservice;
    constructor(yapilarservice: YapilarService);
    readAllUsers(): Promise<{
        statusCode: HttpStatus;
        message: string;
        users: import("./yapilar.entity").YapilarEntity[];
    }>;
}
