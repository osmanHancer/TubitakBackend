import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';
@Injectable()
export class AllcordinatsService {


  findAll() {
    return `This action returns all allcordinats`;
  }
  async findOne(id: string): Promise<any> {
    try {
      // Dosyanın tam yolunu alıyoruz
      const filePath = path.join('uploads', 'allcordinats', id+`.geojson`);

      // Dosyayı okuyoruz
      const fileContent = await fs.readFile(filePath, 'utf8');

      // GeoJSON dosyasını parse ediyoruz
      const geojson = JSON.parse(fileContent);

      return geojson.features[0].geometry.coordinates;
    } catch (error) {
      console.error('Dosya okunurken hata meydana geldi:', error);
      throw new Error('Dosya okunamadı');
    }
  }

}
