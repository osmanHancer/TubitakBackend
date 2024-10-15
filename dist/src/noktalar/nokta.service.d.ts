import { Repository } from 'typeorm';
import { NoktaEntity } from './nokta.entity';
import { NoktaDTO } from './nokta.dto';
export declare class NoktaService {
    private usersRepository;
    constructor(usersRepository: Repository<NoktaEntity>);
    create(data: NoktaDTO): Promise<NoktaEntity>;
    readAllseyyah(seyahname_kodu: string): Promise<NoktaEntity[]>;
    findAlintilar(enlem: number, boylam: number): Promise<NoktaEntity[]>;
    readAll(): Promise<NoktaEntity[]>;
    readSeyyah(seyahname_kodu: string, id: number): Promise<NoktaEntity[]>;
    update(id: number, SeyyahKodu: string, data: NoktaDTO): Promise<NoktaEntity>;
    delete(id: number, kod: string): Promise<{
        deleted: boolean;
    }>;
    getTop10Locations(): Promise<any[]>;
    getTop10Seyyah(): Promise<any[]>;
}
