import { Repository } from 'typeorm';
import { EditorEntity } from './editor.entity';
import { EditornDTO } from './editor.dto';
export declare class editorsService {
    private editorRepository;
    constructor(editorRepository: Repository<EditorEntity>);
    create(data: EditornDTO): Promise<EditorEntity>;
    getAll(): Promise<EditorEntity[]>;
}
