import { AllcordinatDto } from './create-allcordinat.dto';
export declare class AllcordinatsService {
    create(createAllcordinatDto: AllcordinatDto): string;
    findAll(): string;
    findOne(id: string): Promise<any>;
    update(id: number, updateAllcordinatDto: AllcordinatDto): string;
    remove(id: number): string;
}
