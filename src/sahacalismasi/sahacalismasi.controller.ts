import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SahacalısmasıService } from './sahacalismasi.service';
import { CreateSahacalısmasıDto } from './create-sahacalismasi.dto';

@Controller('sahacalismasi')
export class SahacalısmasıController {
  constructor(private readonly sahacalısmasıService: SahacalısmasıService) {}

  @Post()
  create(@Body() createSahacalısmasıDto: CreateSahacalısmasıDto) {
    return this.sahacalısmasıService.create(createSahacalısmasıDto);
  }

  @Get()
  findAll() {
    return this.sahacalısmasıService.findAll();
  }

  @Get(':sahaismi')
  findOne(@Param('sahaismi') sahaismi: string) {
    return this.sahacalısmasıService.findOne(sahaismi);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSahacalısmasıDto: CreateSahacalısmasıDto) {
    return this.sahacalısmasıService.update(+id, updateSahacalısmasıDto);
  }

  @Post('/delete/:sahaismi')
  remove(@Param('sahaismi') sahaismi: string) {
    console.log(sahaismi)
    return this.sahacalısmasıService.remove(sahaismi);
  }
}
