import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { GaleriService } from './galeri.service';
import { GaleriDTO } from './galeri.dto';


@Controller('galeri')
export class GaleriController {

  constructor(private galeriService: GaleriService) { }

  @Get()
  async readAlllokasyons() {

    const galeri = await this.galeriService.readAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'lokasyon fetched successfully',
      galeri
    };
  }
  @Get("filter/:id")
  async readfilter(@Param('id') id: string) {
    const images = await this.galeriService.readAllId(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'lokasyon fetched successfully',
      images
    };
  }

  @Get(":name")
  async readGaleri(@Param('name') imgname: string) {

    const galeri = await this.galeriService.read(imgname);
    return {
      statusCode: HttpStatus.OK,
      message: 'lokasyon fetched successfully',
      galeri
    };
  }

  @Post()
  async createUser(@Body() data: GaleriDTO) {
    console.log(data)
    await this.galeriService.create(data)
    return {
      statusCode: HttpStatus.OK,
      message: 'User create successfully',
    };
  }
  @Post("delete/:imgname")
  async deleteImg(@Param('imgname') imgname: string) {
    await this.galeriService.delete(imgname)
    return {
      statusCode: HttpStatus.OK,
      message: 'User create successfully',
    };
  }
}
