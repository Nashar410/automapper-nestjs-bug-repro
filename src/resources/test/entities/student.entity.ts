import { AutoMap } from "@automapper/classes";
import { TestRoom } from "./test-room.entity";
import { Test } from "./test.entity";
import { Collection } from '@mikro-orm/core';


export class Student {

    @AutoMap()
    id: string;

    @AutoMap()
    name: string;

    @AutoMap({ typeFn: () => TestRoom })
    hasBeen = new Collection<TestRoom>(this);

    @AutoMap({ typeFn: () => Test })
    hasSucceed = new Collection<Test>(this);

}