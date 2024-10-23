import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { SahaAdımlarıService } from './saha-adimlari.service';
import { SahaAdımlarıDto } from './create-saha-adimlari.dto';

@Controller('saha-adimlari')
export class SahaAdımlarıController {
  constructor(private readonly sahaAdımlarıService: SahaAdımlarıService) { }

  @Post()
  create(@Body() createSahaAdımlarıDto: SahaAdımlarıDto) {
    return this.sahaAdımlarıService.create(createSahaAdımlarıDto);
  }

  @Post("delete")
  delete(@Body() deleteSahaAdımlarıDto: SahaAdımlarıDto) {
    console.log(deleteSahaAdımlarıDto)
    return this.sahaAdımlarıService.remove(deleteSahaAdımlarıDto);
  }


  @Get()
  async findAllSaha() {
    const data = await this.sahaAdımlarıService.findAllSaha();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      data
    };
  }
  @Get(':saha_ismi')
  async findAll(@Param('saha_ismi') saha_ismi: string) {
    const data = await this.sahaAdımlarıService.findAll(saha_ismi);
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      data
    };
  }

 

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSahaAdımlarıDto: SahaAdımlarıDto) {
    return this.sahaAdımlarıService.update(+id, updateSahaAdımlarıDto);
  }

}
