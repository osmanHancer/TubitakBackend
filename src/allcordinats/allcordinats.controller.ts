import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllcordinatsService } from './allcordinats.service';

@Controller('allcordinats')
export class AllcordinatsController {
  constructor(private readonly allcordinatsService: AllcordinatsService) {}

 

  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allcordinatsService.findOne(id);
  }


}
