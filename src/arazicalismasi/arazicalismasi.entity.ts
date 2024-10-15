import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('arazicalismasi')
export class ArazicalismasiEntity {


    @PrimaryColumn()
    Envanter_Kodu: string;

    @Column()
    Yapi_Adi: string;

    @Column("double", {precision: 16, scale: 14 })
    enlem: number;

    @Column("double", { precision: 16, scale: 14 })
    boylam: number;

    @Column()
    Guzergah: string;

    @Column()
     Alternatif_Adi: string;

    @Column()
     Donemi: string;

    @Column()
     Kitabesi: string;

    @Column()
     Banisi: string;

    @Column('text')
    Seyahatnamelerdeki_Anlatimi: string;

    @Column()
     Durumu: string;

    @Column()
    Bugunki_Kullanimi: string;

    @Column('text')
     Mimari_Ozellikler: string;

    @Column('text')
    Yasama_Ve_Eski_Kullanima_Dair_İzler: string;

    @Column('text')
    Yapim_Teknigi_Ve_Malzeme: string;

    @Column('text')
    Literatur_Ve_Arsiv_Kaynaklarindan_Notlar: string;

    @Column()
    Kaynakca: string;

    @Column()
    Arazi_Calismasi_Tarihi: string;

    @Column()
    Arazi_Calismasi_Ekibi: string;


}
