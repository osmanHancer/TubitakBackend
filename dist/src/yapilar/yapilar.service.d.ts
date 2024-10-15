import { YapilarEntity } from './yapilar.entity';
import { Repository } from 'typeorm';
export declare class YapilarService {
    private usersRepository;
    constructor(usersRepository: Repository<YapilarEntity>);
    readAll(): Promise<YapilarEntity[]>;
}
