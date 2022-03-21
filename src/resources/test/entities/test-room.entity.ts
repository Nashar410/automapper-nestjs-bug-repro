import { AutoMap } from '@automapper/classes';
import { Collection } from '@mikro-orm/core';
import { Test } from '@nestjs/testing';


export class TestRoom {
    @AutoMap()
    id: string;

    @AutoMap()
    numero: number

    @AutoMap({ typeFn: () => Test })
    tests = new Collection<TestRoom>(this);
    

}
