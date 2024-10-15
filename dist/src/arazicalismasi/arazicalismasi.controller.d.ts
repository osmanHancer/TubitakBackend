import { ArazicalismasiService } from './arazicalismasi.service';
import { CreateArazicalismasiDto } from './create-arazicalismasi.dto';
export declare class ArazicalismasiController {
    private readonly arazicalismasiService;
    constructor(arazicalismasiService: ArazicalismasiService);
    create(createArazicalismasiDto: CreateArazicalismasiDto): string;
    findAll(): string;
    findOne(id: string): Promise<CreateArazicalismasiDto>;
    remove(id: string): string;
}
