import { Module } from '@nestjs/common';
import {RequestsController} from "../requests/requests.controller";
import {RequestsService} from "../requests/requests.service";

@Module({
    providers: [RequestsService],
    controllers: [RequestsController]
})
export class RequestsModule {

}
