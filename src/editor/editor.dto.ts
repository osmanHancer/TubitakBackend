import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class EditornDTO {

    @Type(() => Number)
    Id: number;

    @Type(() => Number)
    Enlem: number;

    @Type(() => Number)
    Boylam: number;


    Lokasyon_Adi: string;


    Olcek: string;


    Mekan_Tipi  : string;

    Envanter_Kodu  : string;


}