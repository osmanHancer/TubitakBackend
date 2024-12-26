import { AllcordinatsService } from './allcordinats.service';
export declare class AllcordinatsController {
    private readonly allcordinatsService;
    constructor(allcordinatsService: AllcordinatsService);
    findOne(id: string): Promise<any>;
}
