import { Type } from "class-transformer";

export class CreateSahacalısmasıDto {


    @Type(() => Number)
    LokasyonId:number;


    @Type(() => Number)
    id:number;

    Sahaismi:string;

}
