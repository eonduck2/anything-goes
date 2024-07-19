import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YourEndpointController } from './modules/fetched.module';

@Module({
  imports: [],
  controllers: [AppController, YourEndpointController],
  providers: [AppService],
})
export class AppModule {}
