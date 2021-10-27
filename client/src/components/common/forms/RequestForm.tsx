import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";
import { Request } from "../../../models/Request";
import {
  ControlForm,
  ErrorBox,
  FormLabel,
  Input,
  Stack,
} from "./RequestForm.styled";

export interface IRequestFormInput {
  application_date: string;
  client_full_name: string;
  carrier_full_name: string;
  mobile_number: string;
  company: string;
  comments: string;
  ATI: string;
}

interface IRequestFormProps {
  request: Request | null;
  register: any;
  errors:  FieldErrors<IRequestFormInput>
}

const RequestForm: FC<IRequestFormProps> = ({ request, register, errors }) => {
  return (
    <form>
      <Stack>
        <ControlForm>
          <FormLabel>Дата подачи заявки</FormLabel>
          <Input
            type="date"
            autocomplete="off"
            defaultValue={request ? request.application_date : ""}
            {...register("application_date")}
          />
          <ErrorBox>{errors.application_date?.message}</ErrorBox>
        </ControlForm>
        <ControlForm>
          <FormLabel>ФИО клиента</FormLabel>
          <Input
            defaultValue={request ? request.client_full_name : ""}
            {...register("client_full_name")}
          />
          <ErrorBox>{errors.client_full_name?.message}</ErrorBox>
        </ControlForm>
        <ControlForm>
          <FormLabel>Компания клиента</FormLabel>
          <Input
            defaultValue={request ? request.company : ""}
            {...register("company")}
          />
          <ErrorBox>{errors.company?.message}</ErrorBox>
        </ControlForm>
        <ControlForm>
          <FormLabel>ФИО перевозчика</FormLabel>
          <Input
            defaultValue={request ? request.carrier_full_name : ""}
            {...register("carrier_full_name")}
          />
          <ErrorBox>{errors.carrier_full_name?.message}</ErrorBox>
        </ControlForm>
        <ControlForm>
          <FormLabel>Номер телефона клиента</FormLabel>
          <Input
            defaultValue={request ? request.mobile_number : ""}
            {...register("mobile_number")}
          />
          <ErrorBox>{errors.mobile_number?.message}</ErrorBox>
        </ControlForm>
        <ControlForm>
          <FormLabel>ATI</FormLabel>
          <Input
            defaultValue={request ? request.ATI : ""}
            {...register("ATI")}
          />
          <ErrorBox>{errors.ATI?.message}</ErrorBox>
        </ControlForm>
        <ControlForm>
          <FormLabel>Комментарий</FormLabel>
          <Input
            defaultValue={request ? request.comments : ""}
            {...register("comments")}
          />
          <ErrorBox>{errors.comments?.message}</ErrorBox>
        </ControlForm>
      </Stack>
    </form>
  );
};

export default RequestForm;