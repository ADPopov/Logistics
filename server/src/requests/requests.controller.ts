import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateRequestDto} from "./dto/CreateRequest.dto";
import {UpdateRequestDto} from "./dto/updateRequest.dto";
import {RequestsService} from "./requests.service";
import {Request} from "../schemas/request.schema";

@Controller('requests')
export class RequestsController {

    constructor(private readonly RequestService: RequestsService) {
    }

    @Get()
    getAll(): Promise<Request[]> {
        return this.RequestService.getAll();
    }

    @Get('/count')
    getTotalCount(): Promise<number> {
        return this.RequestService.getTotalCount()
    }

    @Get(':id')
    getRequestByID(@Param('id') id: string): Promise<Request>  {
        return this.RequestService.getRequestById(id);
    }

    @Post()
    create(@Body() createRequest: CreateRequestDto): Promise<Request> {
        return this.RequestService.create(createRequest);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Request> {
        return this.RequestService.remove(id);
    }

    @Put(':id')
    update(@Body() updateRequest: UpdateRequestDto, @Param('id') id: string) : Promise<Request> {
        return this.RequestService.update(id, updateRequest);
    }

}
