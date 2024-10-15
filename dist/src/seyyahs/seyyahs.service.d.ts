import { Repository } from 'typeorm';
import { SeyyahDTO } from './seyyahs.dto';
export declare class SeyyahsService {
    private seyyahsRepository;
    constructor(seyyahsRepository: Repository<SeyyahDTO>);
    readAll(): Promise<SeyyahDTO[]>;
    read(id: number): Promise<SeyyahDTO>;
    update(id: number, data: SeyyahDTO): Promise<SeyyahDTO>;
    create(data: SeyyahDTO): Promise<SeyyahDTO>;
    delete(id: number): Promise<{
        deleted: boolean;
    }>;
}
