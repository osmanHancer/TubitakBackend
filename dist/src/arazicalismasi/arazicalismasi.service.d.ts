import { CreateArazicalismasiDto } from './create-arazicalismasi.dto';
import { Repository } from 'typeorm';
export declare class ArazicalismasiService {
    private araziRepository;
    constructor(araziRepository: Repository<CreateArazicalismasiDto>);
    create(createArazicalismasiDto: CreateArazicalismasiDto): string;
    findAll(): string;
    findOne(id: string): Promise<CreateArazicalismasiDto>;
    remove(id: number): string;
}
