import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateRequestDto} from "./dto/CreateRequest.dto";
import {UpdateRequestDto} from "./dto/updateRequest.dto";

@Controller('requests')
export class RequestsController {

    @Get()
    getAll() {
        return 'getAll'
    }

    @Get(':id')
    getRequestByID(@Param('id') id: string): string {
        return 'get ' + id
    }

    @Post()
    create(@Body() createRequest: CreateRequestDto) {
        return createRequest
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return "remove " + id
    }

    @Put(':id')
    update(@Body() updateRequest: UpdateRequestDto, @Param('id') id: string) {
        return "remove " + updateRequest.ATI + " " + id
    }

}
