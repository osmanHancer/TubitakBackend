import { Repository } from 'typeorm';
import { CiktilarEntity } from './cikti.entity';
import { CiktilarDTO } from './cikti.dto';
export declare class CiktilarService {
    private kaynakcaRepository;
    constructor(kaynakcaRepository: Repository<CiktilarEntity>);
    readAll(): Promise<CiktilarEntity[]>;
    create(data: CiktilarDTO): Promise<CiktilarEntity>;
}
