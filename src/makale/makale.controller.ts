import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { MakaleService } from './makale.service';
import { MakaleDTO } from './create-makale.dto';

@Controller('makale')
export class MakaleController {
  constructor(private readonly makaleService: MakaleService) {}

  @Post()
  create(@Body() createmakaleDto: MakaleDTO) {
    return this.makaleService.create(createmakaleDto);
  }

  @Get()
 async findAll() {
    const makale = await this.makaleService.findAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'lokasyon fetched successfully',
      makale
    };
  }

  @Get(':id')
 async findOne(@Param('id') kodu: string) {

    const makale = await this.makaleService.findOne(kodu);
    return {
      statusCode: HttpStatus.OK,
      message: 'lokasyon fetched successfully',
      makale
    };
  }


  @Get('/delete/:id')
  remove(@Param('id') id: string) {
    return this.makaleService.remove(id);
  }
}
