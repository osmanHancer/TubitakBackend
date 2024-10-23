import { Type } from "class-transformer";
import { Column, PrimaryColumn } from "typeorm";

export class SahaAdımlarıDto {



    sahacalismasiadi:string

    @Type(() => Number)
    LokasyonId: number;

    not: string;

    @Type(() => Number)
    adimNo: number;
}
