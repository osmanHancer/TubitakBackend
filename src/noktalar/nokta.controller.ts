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
  
  import { NoktaService } from './nokta.service';
  import {NoktaDTO } from './nokta.dto';
  
  @Controller('noktalar')
  export class NoktaController {
    constructor(private usersService: NoktaService) {}
  

    // @Post()
    // async updateUser(@Body() data: CreateCatDto) {
    //   console.log(data);
    //   return 'This action adds a new cat';
    // }
    @Get('top-locations')
  async getTop10Locations() {
    return this.usersService.getTop10Locations();
  }
    @Get('top-seyyah')
  async getTop10Seyyahs() {
    return this.usersService.getTop10Seyyah();
  }
  
    @Get(':seyahname_kodu/:id')
    async readSeyyah(@Param('seyahname_kodu') seyahname_kodu: string,@Param('id') id: number) {
      const data =  await this.usersService.readSeyyah(seyahname_kodu,id);
      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data,
      };
    }
    @Get(':seyahname_kodu')
    async readAllSeyyah(@Param('seyahname_kodu') seyahname_kodu: string,@Param('id') id: number) {
      const data =  await this.usersService.readAllseyyah(seyahname_kodu);
      return {
        statusCode: HttpStatus.OK,
        message: 'User fetched successfully',
        data,
      };
    }
    @Get("alinti/:enlem/:boylam")
    async findAlintilar(@Param('enlem') enlem: number,@Param('boylam') boylam: number) {
      const Id =  await this.usersService.findAlintilar(enlem,boylam);
      return {
        statusCode: HttpStatus.OK,
        message: 'lokasyon fetched successfully',
        Id
      };
    }
  
    @Get()
    async readAllUsers() {
      const users =  await this.usersService.readAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        users
      };
    }
  
    @Post()
    async uppdateUser(@Body() data:NoktaDTO) {
      await this.usersService.create(data);
      return {
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
      };
    }
  
    @Post('/delete/:id/:kod')
    async deleteUser(@Param('id') id: number,@Param('kod') kod: string) {
      await this.usersService.delete(id,kod);
      return {
        statusCode: HttpStatus.OK,
        message: 'User deleted successfully',
      };
    }
  }