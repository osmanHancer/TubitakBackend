import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    HttpStatus,
  } from '@nestjs/common';
  
  import { editorsService } from './editor.service';
  import { EditornDTO } from './editor.dto';
  
  @Controller('editor')
  export class editorController {
    constructor(private lokasyonService: editorsService) {}
  
    @Post()
    async createUser(@Body() data: EditornDTO) {
       const editor = await this.lokasyonService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'lokasyon created successfully',
        editor
      };
    }

    
    @Get()
    async readData() {
       const editor = await this.lokasyonService.getAll()
      return {
        statusCode: HttpStatus.OK,
        message: 'lokasyon created successfully',
        editor
      };
    }
  
  
  
   

  
  }