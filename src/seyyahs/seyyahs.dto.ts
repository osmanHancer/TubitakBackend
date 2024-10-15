import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class SeyyahDTO {


  @Type(() => Number)
  id: number;

  name: string;

  yuzyil: string;

  tarih: string;

  anadil: string;

  ceviri: string;

  notlar: string;




}