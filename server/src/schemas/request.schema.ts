import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type RequestDocument = Request & Document

@Schema({toJSON: {
        transform: (doc: RequestDocument, ret) => {
            delete ret.__v;
            ret.id = ret._id;
            delete ret._id;
        }
    }})
export class Request {
    @Prop()
    id: number;

    @Prop()
    client_full_name: string;

    @Prop()
    application_date: string;

    @Prop()
    company: string;

    @Prop()
    carrier_full_name: string;

    @Prop()
    mobile_number: string;

    @Prop()
    comments: string;

    @Prop()
    ATI: number;
}

export const RequestSchema = SchemaFactory.createForClass(Request)