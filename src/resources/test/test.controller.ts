import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { TestDto } from './dto/test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() testDto: TestDto) {
    return this.testService.create(testDto);
  }

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() testDto: TestDto) {
    return this.testService.update(+id, testDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
