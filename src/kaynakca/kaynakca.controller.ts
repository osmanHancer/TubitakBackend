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
import { KaynakcaService } from './kaynakca.service';
import { KayncakcaDTO } from './kaynakca.dto';

@Controller('kaynakca')
export class KaynakcaController {
    constructor(private YapimonografisiService: KaynakcaService) {}



  
    @Get()
    async readAll() {
      const data =  await this.YapimonografisiService.readAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        data
      };
    }
    @Post()
    async createUser(@Body() data:KayncakcaDTO) {
      console.log(data)
      await this.YapimonografisiService.create(data)
      return {
        statusCode: HttpStatus.OK,
        message: 'User create successfully',
      };
    }

 
}
