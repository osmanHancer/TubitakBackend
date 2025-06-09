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
import { CiktilarService } from './cikti.service';
import { CiktilarDTO } from './cikti.dto';

@Controller('ciktilar')
export class CiktilarController {
    constructor(private YapimonografisiService: CiktilarService) {}



  
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
    async createUser(@Body() data:CiktilarDTO) {
      console.log(data)
      await this.YapimonografisiService.create(data)
      return {
        statusCode: HttpStatus.OK,
        message: 'User create successfully',
      };
    }

 
}
