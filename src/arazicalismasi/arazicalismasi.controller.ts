import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArazicalismasiService } from './arazicalismasi.service';
import { CreateArazicalismasiDto } from './create-arazicalismasi.dto';

@Controller('arazicalismasi')
export class ArazicalismasiController {
  constructor(private readonly arazicalismasiService: ArazicalismasiService) {}

  @Post()
  create(@Body() createArazicalismasiDto: CreateArazicalismasiDto) {
    return this.arazicalismasiService.create(createArazicalismasiDto);
  }

  @Get()
  findAll() {
    return this.arazicalismasiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arazicalismasiService.findOne(id);
  }



  @Post('delete/:envanter_kodu')
  remove(@Param('envanter_kodu') envanter_kodu: string) {
    return this.arazicalismasiService.remove(envanter_kodu);
  }
}
