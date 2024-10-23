import { Injectable } from '@nestjs/common';
import { SahaAdımlarıDto } from './create-saha-adimlari.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SahaAdımlarıEntity } from './saha-adimlari.entity';

@Injectable()
export class SahaAdımlarıService {


  constructor(
    @InjectRepository(SahaAdımlarıEntity)
    private sahaRepository: Repository<SahaAdımlarıDto>
  ) {}

 async create(createSahaAdımlarıDto: SahaAdımlarıDto) {
    
    const user = this.sahaRepository.create(createSahaAdımlarıDto);
    await this.sahaRepository.save(user)
    return user;
  }

 async findAllSaha() {
  
   {

    const queryBuilder = this.sahaRepository.createQueryBuilder('sahadımları');

    return  await queryBuilder
      .select('sahacalismasiadi')
      .distinct(true)
      .getRawMany();

   
  }
  
  }
  
 async findAll(saha_ismi:string) {
  return await this.sahaRepository.find({ where: { sahacalismasiadi: saha_ismi} });
 
 }

  findOne(id: number) {
    return `This action returns a #${id} sahaAdımları`;
  }

  update(id: number, updateSahaAdımlarıDto: SahaAdımlarıDto) {
    return `This action updates a #${id} sahaAdımları`;
  }

 async remove(deleteSahaAdımlarıDto: SahaAdımlarıDto) {
    await this.sahaRepository.delete({sahacalismasiadi:deleteSahaAdımlarıDto.sahacalismasiadi,adimNo:deleteSahaAdımlarıDto.adimNo});
    return { deleted: true };
  }
}
