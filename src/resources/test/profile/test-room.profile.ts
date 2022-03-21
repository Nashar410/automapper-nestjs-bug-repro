import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { TestRoom } from '../entities/test-room.entity';
import { TestRoomDto } from '../dto/test-room.dto';

@Injectable()
export class TestRoomProfile extends AutomapperProfile {
    constructor(
        @InjectMapper() mapper: Mapper
    ) {
        super(mapper);
    }
    
    mapProfile() {
        return (mapper) => {
            mapper.createMap(TestRoom, TestRoomDto);
            mapper.createMap(TestRoomDto, TestRoom);
            
        };
    }
}
