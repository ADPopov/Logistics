import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Request, RequestDocument} from "../schemas/request.schema";
import {Model} from 'mongoose'
import {CreateRequestDto} from "./dto/CreateRequest.dto";
import {UpdateRequestDto} from "./dto/updateRequest.dto";

@Injectable()
export class RequestsService {
    constructor(@InjectModel(Request.name) private requestModel: Model<RequestDocument>) {}

    async getAll(): Promise<Request[]> {
        return this.requestModel.find().exec();
    }

    async getRequestById(id: string): Promise<Request> {
        return this.requestModel.findById(id)
    }

    async create(requestDto: CreateRequestDto): Promise<Request> {
        const newRequest = new this.requestModel(requestDto);
        return newRequest.save();
    }

    async remove(id: string): Promise<Request> {
        return this.requestModel.findByIdAndRemove(id);
    }

    async update(id: string, requestDto: UpdateRequestDto): Promise<Request> {
        return this.requestModel.findByIdAndUpdate(id, requestDto, {new: true})
    }

    async getTotalCount(): Promise<number> {
        return this.requestModel.find().count()
    }
}
