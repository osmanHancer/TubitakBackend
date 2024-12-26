import { HttpStatus } from '@nestjs/common';
import { editorsService } from './editor.service';
import { EditornDTO } from './editor.dto';
export declare class editorController {
    private lokasyonService;
    constructor(lokasyonService: editorsService);
    createUser(data: EditornDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        editor: import("./editor.entity").EditorEntity;
    }>;
    readData(): Promise<{
        statusCode: HttpStatus;
        message: string;
        editor: import("./editor.entity").EditorEntity[];
    }>;
}
