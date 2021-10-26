import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestsController } from './requests/requests.controller';
import { RequestsService } from './requests/requests.service';
import { RequestsModule } from './requests-module/requests.module';

@Module({
  imports: [RequestsModule],
  controllers: [AppController, RequestsController],
  providers: [AppService, RequestsService],
})
export class AppModule {}
