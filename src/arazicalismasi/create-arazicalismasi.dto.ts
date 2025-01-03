import { Type } from "class-transformer";
import { Decimal128 } from "typeorm";

export class CreateArazicalismasiDto {


    Envanter_Kodu: string;


    Yapi_Adi: string;

    @Type(() => Number)
    enlem: number;

    @Type(() => Number)
    boylam: number;


    Guzergah: string;


    Alternatif_Adi: string;


    Donemi: string;


    Kitabesi: string;


    Banisi: string;


    Seyahatnamelerdeki_Anlatimi: string;


    Durumu: string;


    Bugunki_Kullanimi: string;


    Mimari_Ozellikler: string;


    Yasama_Ve_Eski_Kullanima_Dair_Izler: string;


    Yapim_Teknigi_Ve_Malzeme: string;


    Literatur_Ve_Arsiv_Kaynaklarindan_Notlar: string;


    Kaynakca: string;


    Arazi_Calismasi_Tarihi: string;


    Arazi_Calismasi_Ekibi: string;
}
