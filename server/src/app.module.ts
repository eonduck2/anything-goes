import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EndPointController } from './modules/fetched.controller';

@Module({
  imports: [],
  controllers: [AppController, EndPointController],
  providers: [AppService],
})
export class AppModule {}
