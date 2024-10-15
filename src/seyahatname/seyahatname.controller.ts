import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { SeyahatnameService } from './seyahatname.service';
import { CreateSeyahatnameDto } from './create-seyahatname.dto';

@Controller('seyahatname')
export class SeyahatnameController {
  constructor(private readonly seyahatnameService: SeyahatnameService) { }

  @Post()
  create(@Body() createSeyahatnameDto: CreateSeyahatnameDto) {


    return this.seyahatnameService.create(createSeyahatnameDto);
  }

  @Get()
  async findAll() {
    const users = await this.seyahatnameService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seyahatnameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeyahatnameDto: CreateSeyahatnameDto) {
    return this.seyahatnameService.update(+id, updateSeyahatnameDto);
  }

  @Post('delete/:id')
  remove(@Param('id') id: string) {
    console.log(id);
    return this.seyahatnameService.remove(+id);
  }
}
