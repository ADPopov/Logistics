import React, {FC} from 'react';
import styled from "styled-components";
import {Request} from "../../../models/Request";

export const Stack = styled.div``
export const ControlForm = styled.div``
export const FormLabel = styled.div`
  margin: 8px 0;
`
export const Input = styled.input`
  width: 400px;
  padding: 10px;
  border: 2px solid #2b2b2c;
  border-radius: 4px;
  outline: none;

  :focus {
    border: 2px solid #f69301;
    border-radius: 4px;
  }
`
export const ErrorBox = styled.div``

export interface IRequestFormInput {
    application_date: string,
    client_full_name: string,
    carrier_full_name: string,
    mobile_number: string,
    company: string,
    comments: string,
    ATI: string
}

interface IRequestFormProps {
    request: Request | null
    register: any
}

const RequestForm: FC<IRequestFormProps> = ({request, register}) => {

    return (
        <form>
            <Stack>
                <ControlForm>
                    <FormLabel>Дата подачи заявки</FormLabel>
                    <Input type="date" autocomplete="off"
                           defaultValue={request ? request.application_date : ""} {...register("application_date")} />
                    <ErrorBox></ErrorBox>
                </ControlForm>
                <ControlForm>
                    <FormLabel>ФИО клиента</FormLabel>
                    <Input defaultValue={request ? request.client_full_name : ""} {...register("client_full_name")} />
                    <ErrorBox></ErrorBox>
                </ControlForm>
                <ControlForm>
                    <FormLabel>Компания клиента</FormLabel>
                    <Input defaultValue={request ? request.company : ""} {...register("company")} />
                    <ErrorBox></ErrorBox>
                </ControlForm>
                <ControlForm>
                    <FormLabel>ФИО перевозчика</FormLabel>
                    <Input defaultValue={request ? request.carrier_full_name : ""} {...register("carrier_full_name")} />
                    <ErrorBox></ErrorBox>
                </ControlForm>
                <ControlForm>
                    <FormLabel>Комментарий</FormLabel>
                    <Input defaultValue={request ? request.comments : ""} {...register("comments")} />
                    <ErrorBox></ErrorBox>
                </ControlForm>
                <ControlForm>
                    <FormLabel>ATI</FormLabel>
                    <Input defaultValue={request ? request.ATI : ""} {...register("ATI")} />
                    <ErrorBox></ErrorBox>
                </ControlForm>
            </Stack>
        </form>
    );
};

export default RequestForm;