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
import { YapimonografisiService } from './yapimonografisi.service';
import { YapiMonografisiDTO } from './yapimonografisi.dto';

@Controller('yapimonografisi')
export class YapimonografisiController {
    constructor(private YapimonografisiService: YapimonografisiService) {}



    @Get(":yapi_ismi")
    async read(@Param('yapi_ismi') yapi_ismi: string,) {
      const data =  await this.YapimonografisiService.read(yapi_ismi);
      return {
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        data
      };
    }
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
    async createUser(@Body() data:YapiMonografisiDTO) {
      console.log(data)
      await this.YapimonografisiService.create(data)
      return {
        statusCode: HttpStatus.OK,
        message: 'User create successfully',
      };
    }
}
