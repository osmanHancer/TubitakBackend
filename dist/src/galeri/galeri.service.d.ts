import { GaleriEntity } from './galeri.entity';
import { Repository } from 'typeorm';
import { GaleriDTO } from './galeri.dto';
export declare class GaleriService {
    private usersRepository;
    constructor(usersRepository: Repository<GaleriEntity>);
    create(data: GaleriDTO): Promise<GaleriEntity>;
    readAll(): Promise<GaleriEntity[]>;
    read(imgname: any): Promise<GaleriEntity>;
    readAllId(ıd: any): Promise<GaleriEntity[]>;
    delete(imgname: string): Promise<void>;
}
