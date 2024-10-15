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
  
  import { YapilarService } from './yapilar.service';
  import { YapilarDTO } from './yapilar.dto';
@Controller('yapilar')
export class YapilarController {
  constructor(private yapilarservice: YapilarService) {}
  
  @Get()
  async readAllUsers() {
    const users =  await this.yapilarservice.readAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }
}
