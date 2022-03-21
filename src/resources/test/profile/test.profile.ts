import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Test } from '../entities/test.entity';
import { TestDto } from '../dto/test.dto';

@Injectable()
export class TestProfile extends AutomapperProfile {
    constructor(
        @InjectMapper() mapper: Mapper
    ) {
        super(mapper);
    }
    
    mapProfile() {
        return (mapper) => {
            mapper.createMap(Test, TestDto);
            mapper.createMap(TestDto, Test);
            
        };
    }
}
