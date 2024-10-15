import { Type } from "class-transformer";

export class CreateSeyahatnameDto {

    @Type(() => Number)
    Id : number;
  
    Yazar: string;
  
    SeyahatnameKodu  : string;

    yuzyil:string

}
