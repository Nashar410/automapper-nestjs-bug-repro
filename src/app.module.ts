import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { TestModule } from './resources/test/test.module';

@Module({
  imports: [
    AutomapperModule.forRoot({
      options: [{ name: 'classes', pluginInitializer: classes }],
      singular: true,
    }),
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
