import { AutoMap } from '@automapper/classes';
import { StudentDto } from './student.dto';
import { TestRoomDto } from './test-room.dto';

export class TestDto {
    @AutoMap()
    id: string;

    @AutoMap()
    nom: string;

    @AutoMap({ typeFn: () => TestRoomDto })
    testRoom: TestRoomDto;

    @AutoMap({ typeFn: () => StudentDto })
    champList: StudentDto[];

}
