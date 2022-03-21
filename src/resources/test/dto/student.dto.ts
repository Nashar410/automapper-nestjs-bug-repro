import { AutoMap } from "@automapper/classes";
import { TestRoomDto } from "./test-room.dto";
import { TestDto } from "./test.dto";

export class StudentDto {

    @AutoMap()
    id: string;

    @AutoMap()
    name: string;

    @AutoMap({ typeFn: () => TestRoomDto })
    hasBeen: TestRoomDto[];

    @AutoMap({ typeFn: () => TestDto })
    hasSucceed: TestDto[];

}