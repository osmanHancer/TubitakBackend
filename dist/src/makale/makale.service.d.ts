import { MakaleEntity } from './makale.entity';
import { Repository } from 'typeorm';
import { MakaleDTO } from './create-makale.dto';
export declare class MakaleService {
    private usersRepository;
    constructor(usersRepository: Repository<MakaleEntity>);
    create(createMakaleDto: MakaleDTO): Promise<MakaleEntity>;
    findAll(): Promise<MakaleEntity[]>;
    findOne(kodu: string): Promise<MakaleEntity>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
