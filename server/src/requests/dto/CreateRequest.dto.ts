export class CreateRequestDto {
    readonly id: number;
    readonly client_full_name: string;
    readonly application_date: string;
    readonly company: string;
    readonly carrier_full_name: string;
    readonly mobile_number: string;
    readonly comments: string;
    readonly ATI: number;
}