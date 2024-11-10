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

import { SeyyahsService } from './seyyahs.service';
import { SeyyahDTO } from './seyyahs.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('seyyahs')
export class SeyyahsController {

  constructor(private seyyahsService: SeyyahsService) { }


  @Get()
  async readAllUsers() {
    const users = await this.seyyahsService.readAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users
    };
  }
  @Get(":id")
  async readUser(@Param('id') id: number) {
    const lokasyon = await this.seyyahsService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User fetched successfully',
      lokasyon
    };
  }

  // @Post("update/:id")
  // async uppdateUser(@Body() data:SeyyahDTO,@Param('id') id: number) {
  //  await this.seyyahsService.update(id,data);
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'User updated successfully',
  //   };

  // }
  @Post("delete/:id")
  async deleteUser(@Param('id') id: number) {

    await this.seyyahsService.delete(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User delete successfully',
    };
  }
  @Post()
  async createUser(@Body() data: SeyyahDTO) {

    await this.seyyahsService.create(data)
    return {
      statusCode: HttpStatus.OK,
      message: 'User create successfully',
    };
  }
}
