import { Repository } from 'typeorm';
import { KaynakcaEntity } from './kaynakca.entity';
import { KayncakcaDTO } from './kaynakca.dto';
export declare class KaynakcaService {
    private kaynakcaRepository;
    constructor(kaynakcaRepository: Repository<KaynakcaEntity>);
    readAll(): Promise<KaynakcaEntity[]>;
    create(data: KayncakcaDTO): Promise<KaynakcaEntity>;
}
