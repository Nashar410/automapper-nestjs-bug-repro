import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Student } from '../entities/student.entity';
import { StudentDto } from '../dto/student.dto';


@Injectable()
export class  StudentProfile extends AutomapperProfile {
    constructor(
        @InjectMapper() mapper: Mapper
    ) {
        super(mapper);
    }
    
    mapProfile() {
        return (mapper) => {
            mapper.createMap(Student, StudentDto);
            mapper.createMap(StudentDto, Student);
            
        };
    }
}
