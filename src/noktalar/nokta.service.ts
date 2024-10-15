import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoktaEntity } from './nokta.entity';
import { NoktaDTO } from './nokta.dto';

@Injectable()
export class NoktaService {
  constructor(
    @InjectRepository(NoktaEntity)
    private usersRepository: Repository<NoktaEntity>
  ) { }

  async create(data: NoktaDTO) {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(user);
    return user;
  }

  async readAllseyyah(seyahname_kodu: string) {
    return await this.usersRepository.find({ where: { seyahname_kodu: seyahname_kodu } });
  }

  async findAlintilar(enlem: number, boylam: number) {
    return await this.usersRepository.find({ where: { enlem: enlem, boylam: boylam } });

  }

  async readAll() {

    return await this.usersRepository.find();
  }
  async readSeyyah(seyahname_kodu: string, id: number) {
    return await this.usersRepository.find({ where: { seyahname_kodu: seyahname_kodu, id: id } });
  }

  async update(id: number, SeyyahKodu: string, data: NoktaDTO) {

    await this.usersRepository.update({ id: id, seyahname_kodu: SeyyahKodu }, data);
    return await this.usersRepository.findOne({ where: { id: id, seyahname_kodu: SeyyahKodu } });
  }

  async delete(id: number, kod: string) {
    console.log(id, kod)

    await this.usersRepository.delete({ id: id, seyahname_kodu: kod });
    return { deleted: true };
  }
  async getTop10Locations(): Promise<any[]> {
    return this.usersRepository.query(`
      SELECT 
        allpoint.enlem, 
        allpoint.boylam, 
        allpoint.mekanin_gunumuzdeki_adi,
        COUNT(*) AS kullanim_sayisi
      FROM 
        allpoint
      WHERE
        allpoint.enlem != 0 
        AND allpoint.boylam != 0
      GROUP BY 
        allpoint.enlem, 
        allpoint.boylam
      ORDER BY 
        kullanim_sayisi DESC
      LIMIT 10;
    `);
  }
  async getTop10Seyyah(): Promise<any[]> {
    return this.usersRepository.query(`
    SELECT 
      allpoint.yazar,
      COUNT(*) AS kullanim_sayisi
    FROM 
      allpoint
    GROUP BY 
     allpoint.yazar
    ORDER BY 
     kullanim_sayisi DESC
    LIMIT 10;
    `);
  }
}