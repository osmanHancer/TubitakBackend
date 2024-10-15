import { Repository } from 'typeorm';
import { LokasyonEntity } from './lokasyon.entity';
import { LokasyonDTO } from './lokasyon.dto';
export declare class lokasyonsService {
    private usersRepository;
    constructor(usersRepository: Repository<LokasyonEntity>);
    create(data: LokasyonDTO): Promise<LokasyonEntity>;
    read(id: number): Promise<LokasyonEntity>;
    findId(id: string): Promise<number>;
    findIdEnlemBoylam(enlem: number, boylam: number): Promise<LokasyonEntity>;
    readAll(): Promise<LokasyonEntity[]>;
    delete(id: number): Promise<{
        deleted: boolean;
    }>;
}
