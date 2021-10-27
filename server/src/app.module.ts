import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {RequestsModule} from './requests-module/requests.module';


@Module({
  imports: [
    RequestsModule,
    MongooseModule.forRoot("mongodb+srv://alexp:alexp@cluster0.wtmws.mongodb.net/requests?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
