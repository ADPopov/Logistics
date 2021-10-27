import { Module } from '@nestjs/common';
import {RequestsController} from "../requests/requests.controller";
import {RequestsService} from "../requests/requests.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Request, RequestSchema} from 'src/schemas/request.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Request.name, schema: RequestSchema }])],
    providers: [RequestsService],
    controllers: [RequestsController]
})
export class RequestsModule {

}
