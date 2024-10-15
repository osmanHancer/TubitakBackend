import { Type } from "class-transformer";

export class NoktaDTO {

 
  yuzyil: string;

 
  seyahname_kodu : string;

 
  yazar : string;

 
  seyahatname_adi : string;

 
  bolum_chapter_mektupnumarasi : string;

 
  sayfa_numarasi : number;


  seyahat_adimi : number;

 
  anlatida_gecen_mekan_adi : string;

 
  mekanin_gunumuzdeki_adi : string;

 
  enlem : number;

 
  boylam : number;
  
 
  tespit_edilen_konum_olcegi : string;

 
  mekan_tipi : string;

 
  konaklanma_durumu : string;

 
  yapi_envanter_kodu : string;

 
  alintilar  : string;

 
  notlar  : string;

 
  rota_notlari  : string;

 
  deniz_yoluyla_ulasim : string;
  
  @Type(() => Number)
  id : number;


  }