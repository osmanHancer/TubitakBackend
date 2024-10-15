import { Repository } from 'typeorm';
import { YapiMonografisiEntity } from './yapimonografisi.entity';
import { YapiMonografisiDTO } from './yapimonografisi.dto';
export declare class YapimonografisiService {
    private yapimonografisiRepository;
    constructor(yapimonografisiRepository: Repository<YapiMonografisiEntity>);
    read(yapi_ismi: string): Promise<YapiMonografisiEntity>;
    readAll(): Promise<YapiMonografisiEntity[]>;
    create(data: YapiMonografisiDTO): Promise<YapiMonografisiEntity>;
}
