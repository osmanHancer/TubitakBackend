import { ArazicalismasiService } from './arazicalismasi.service';
import { CreateArazicalismasiDto } from './create-arazicalismasi.dto';
export declare class ArazicalismasiController {
    private readonly arazicalismasiService;
    constructor(arazicalismasiService: ArazicalismasiService);
    create(createArazicalismasiDto: CreateArazicalismasiDto): Promise<CreateArazicalismasiDto>;
    findAll(): Promise<CreateArazicalismasiDto[]>;
    findOne(id: string): Promise<CreateArazicalismasiDto>;
    remove(envanter_kodu: string): Promise<import("typeorm").DeleteResult>;
}
