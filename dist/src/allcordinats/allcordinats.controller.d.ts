import { AllcordinatsService } from './allcordinats.service';
import { AllcordinatDto } from './create-allcordinat.dto';
export declare class AllcordinatsController {
    private readonly allcordinatsService;
    constructor(allcordinatsService: AllcordinatsService);
    create(createAllcordinatDto: AllcordinatDto): string;
    findAll(): string;
    findOne(id: string): Promise<any>;
    update(id: string, updateAllcordinatDto: AllcordinatDto): string;
    remove(id: string): string;
}
