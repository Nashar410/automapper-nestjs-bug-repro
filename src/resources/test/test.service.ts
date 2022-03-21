import type { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { TestDto } from './dto/test.dto';

@Injectable()
export class TestService {

constructor(@InjectMapper() mapper: Mapper) {}

  create(testDto: TestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, testDto: TestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
