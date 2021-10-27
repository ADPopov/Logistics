export interface Request extends Record<string, unknown> {
  id: string;
  client_full_name: string;
  application_date: string;
  company: string;
  carrier_full_name: string;
  mobile_number: string;
  comments: string;
  ATI: number;
}
