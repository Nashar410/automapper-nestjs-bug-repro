import { AutoMap } from '@automapper/classes';
import { StudentDto } from './student.dto';
import { TestDto } from './test.dto';

export class TestRoomDto {
    @AutoMap()
    id: string;

    @AutoMap()
    numero: number

    @AutoMap({ typeFn: () => TestDto })
    tests: TestDto[];

    @AutoMap({ typeFn: () => StudentDto })
    wereVisitedBy: StudentDto[];


}
