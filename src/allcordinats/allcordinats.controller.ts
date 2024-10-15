import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllcordinatsService } from './allcordinats.service';
import { AllcordinatDto } from './create-allcordinat.dto';

@Controller('allcordinats')
export class AllcordinatsController {
  constructor(private readonly allcordinatsService: AllcordinatsService) {}

  @Post()
  create(@Body() createAllcordinatDto: AllcordinatDto) {
    return this.allcordinatsService.create(createAllcordinatDto);
  }

  @Get()
  findAll() {
    return this.allcordinatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allcordinatsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllcordinatDto: AllcordinatDto) {
    return this.allcordinatsService.update(+id, updateAllcordinatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allcordinatsService.remove(+id);
  }
}
