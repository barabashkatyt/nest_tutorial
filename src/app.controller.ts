import { Controller, Get, Post, Param, Delete, Put, Body, Redirect, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateProductDto } from './products/dto/create-product.dto';
import { UpdateProductDto } from './products/dto/update-product.dto';




@Controller('products')
export class AppController {

  @Get()
  // Reditect with status 301
  // @Redirect('https://google.com', 301)
  getAll() :string {
    return "getaAll"
  }

  // @Get(':id')
  // getOne(@Param() params){
  //   return "one" + params.id
  // }

    @Get(':id')
  getOne(@Param('id') id: string) :string{
    return "one" + id
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-control','none')
  create(@Body() createProductDto: CreateProductDto) : string{
    return `Title: ${createProductDto.title} Price: ${createProductDto.price}`
  }
  @Delete(':id')
  remove(@Param('id') id :string){
    return 'Remove' + id
  }

  @Put(':id')
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string){
    return 'Update' + id
  }
}
