import { CreateSeyahatnameDto } from './create-seyahatname.dto';
import { Repository } from 'typeorm';
export declare class SeyahatnameService {
    private seyahatnameRepository;
    constructor(seyahatnameRepository: Repository<CreateSeyahatnameDto>);
    create(data: CreateSeyahatnameDto): Promise<CreateSeyahatnameDto>;
    findAll(): Promise<CreateSeyahatnameDto[]>;
    findOne(id: number): Promise<CreateSeyahatnameDto>;
    update(id: number, updateSeyahatnameDto: CreateSeyahatnameDto): string;
    remove(id: number): Promise<void>;
}
