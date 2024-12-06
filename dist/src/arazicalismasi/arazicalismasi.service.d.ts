import { CreateArazicalismasiDto } from './create-arazicalismasi.dto';
import { Repository } from 'typeorm';
export declare class ArazicalismasiService {
    private araziRepository;
    constructor(araziRepository: Repository<CreateArazicalismasiDto>);
    create(createArazicalismasiDto: CreateArazicalismasiDto): Promise<CreateArazicalismasiDto>;
    findAll(): Promise<CreateArazicalismasiDto[]>;
    findOne(id: string): Promise<CreateArazicalismasiDto>;
    remove(envanter_kodu: string): Promise<import("typeorm").DeleteResult>;
}
