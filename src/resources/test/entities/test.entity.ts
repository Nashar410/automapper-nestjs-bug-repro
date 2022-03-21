import { AutoMap } from '@automapper/classes';
import { Collection } from '@mikro-orm/core';
import { TestRoom } from './test-room.entity';

export class Test {
    @AutoMap()
    id: string;

    @AutoMap()
    nom: string

    @AutoMap({ typeFn: () => TestRoom })
    testRoom = new Collection<TestRoom>(this);

}
