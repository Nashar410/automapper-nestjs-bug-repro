import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TestProfile } from './profile/test.profile';
import { TestRoomProfile } from './profile/test-room.profile';
import { StudentProfile } from './profile/student.profile';

@Module({
  controllers: [TestController],
  providers: [TestService, TestProfile, TestRoomProfile, StudentProfile], 
})
export class TestModule {}
