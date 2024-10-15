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
  
  import { lokasyonsService } from './lokasyon.service';
  import { LokasyonDTO } from './lokasyon.dto';
  
  @Controller('lokasyon')
  export class lokasyonsController {
    constructor(private lokasyonService: lokasyonsService) {}
  
    @Post()
    async createUser(@Body() data: LokasyonDTO) {
      console.log(data)
       const lokasyon = await this.lokasyonService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'lokasyon created successfully',
        lokasyon
      };
    }
  
  
  
    @Get()
    async readAlllokasyons() {
      const lokasyon =  await this.lokasyonService.readAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'lokasyon fetched successfully',
        lokasyon
      };
    }
    @Get(":id")
    async readLokasyons(@Param('id') id: number) {
      const lokasyon =  await this.lokasyonService.read(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'lokasyon fetched successfully',
        lokasyon
      };
    }
    @Get("getId/:envanter_kod")
    async findLokasyon(@Param('envanter_kod') id: string) {
      const Id =  await this.lokasyonService.findId(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'lokasyon fetched successfully',
        Id
      };
    }
    @Get("getId/:enlem/:boylam")
    async findLokasyonEnlemBoylam(@Param('enlem') enlem: number,@Param('boylam') boylam:number) {
      const result =  await this.lokasyonService.findIdEnlemBoylam(enlem,boylam);
      return {
        statusCode: HttpStatus.OK,
        message: 'lokasyon fetched successfully',
        result
      };
    }

  
    // @Post('update/:id')
    // async uppdateLokasyon(@Param('id') Id: number, @Body() data:LokasyonDTO) {
    //   await this.lokasyonService.update(Id, data);
    //   return {
    //     statusCode: HttpStatus.OK,
    //     message: 'User updated successfully',
    //   };
    // }
  
    @Post('delete/:id')
    async deleteUser(@Param('id') id: number) {
      await this.lokasyonService.delete(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User deleted successfully',
      };
    }
  }