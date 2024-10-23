import { SahaAdımlarıDto } from './create-saha-adimlari.dto';
import { Repository } from 'typeorm';
export declare class SahaAdımlarıService {
    private sahaRepository;
    constructor(sahaRepository: Repository<SahaAdımlarıDto>);
    create(createSahaAdımlarıDto: SahaAdımlarıDto): Promise<SahaAdımlarıDto>;
    findAllSaha(): Promise<any[]>;
    findAll(saha_ismi: string): Promise<SahaAdımlarıDto[]>;
    findOne(id: number): string;
    update(id: number, updateSahaAdımlarıDto: SahaAdımlarıDto): string;
    remove(deleteSahaAdımlarıDto: SahaAdımlarıDto): Promise<{
        deleted: boolean;
    }>;
}
