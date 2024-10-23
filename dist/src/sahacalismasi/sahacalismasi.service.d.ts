import { CreateSahacalısmasıDto } from './create-sahacalismasi.dto';
import { Repository } from 'typeorm';
export declare class SahacalısmasıService {
    private sahaRepository;
    constructor(sahaRepository: Repository<CreateSahacalısmasıDto>);
    create(createSahacalısmasıDto: CreateSahacalısmasıDto): Promise<CreateSahacalısmasıDto>;
    findAll(): Promise<CreateSahacalısmasıDto[]>;
    findOne(sahaismi: string): Promise<CreateSahacalısmasıDto>;
    update(id: number, updateSahacalısmasıDto: CreateSahacalısmasıDto): string;
    remove(sahaismi: string): Promise<{
        deleted: boolean;
    }>;
}
