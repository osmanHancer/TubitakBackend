import { HttpStatus } from '@nestjs/common';
import { GaleriService } from './galeri.service';
import { GaleriDTO } from './galeri.dto';
export declare class GaleriController {
    private galeriService;
    constructor(galeriService: GaleriService);
    readAlllokasyons(): Promise<{
        statusCode: HttpStatus;
        message: string;
        galeri: import("./galeri.entity").GaleriEntity[];
    }>;
    readfilter(id: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        images: import("./galeri.entity").GaleriEntity[];
    }>;
    readGaleri(imgname: string): Promise<{
        statusCode: HttpStatus;
        message: string;
        galeri: import("./galeri.entity").GaleriEntity;
    }>;
    createUser(data: GaleriDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    deleteImg(imgname: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
