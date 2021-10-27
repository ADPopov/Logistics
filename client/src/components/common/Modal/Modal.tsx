import React, { FC, useRef } from "react";
import ReactDOM from "react-dom";
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import RequestForm, { IRequestFormInput } from "../forms/RequestForm";
import { SubmitHandler, useForm } from "react-hook-form";
import { Request } from "../../../models/Request";
import {
  Button,
  Footer,
  ModalContainer,
  ModalWrapper,
  Title,
} from "./Modal.styled";
import { useAction } from "../../../hooks/useAction";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


interface ModalProps {
  onClose: () => void;
  request?: Request | null;
  title: string;
}

const Modal: FC<ModalProps> = ({ onClose, request, title }) => {
  const schema = yup.object().shape({
    client_full_name: yup.string().required(),
    application_date: yup.string().required(),
    company: yup.string().required(),
    carrier_full_name: yup.string().required(),
    mobile_number: yup.string().matches(phoneRegExp, 'Phone number is not valid').notRequired(),
    comments: yup.string(),
    ATI: yup.number().required(),
  })

  const modalContainerRef = useRef(null);
  const { createRequest, fetchUpdateRequest } = useAction();
  const { handleSubmit, register, formState: {errors} } = useForm<IRequestFormInput>({resolver: yupResolver(schema),  defaultValues: request?.ATI ? {} : {ATI: '0'} });

  const clickOutsideHandler = () => onClose();
  useOnClickOutside(modalContainerRef, clickOutsideHandler);

  const onSubmit: SubmitHandler<IRequestFormInput> = (data) => {
    const newRequest = {
      client_full_name: data.client_full_name,
      application_date: data.application_date,
      company: data.company,
      carrier_full_name: data.carrier_full_name,
      mobile_number: data.mobile_number,
      comments: data.comments,
      ATI: Number(data.ATI),
    };
    request
      ? fetchUpdateRequest(request.id, newRequest as Request)
      : createRequest(newRequest as Request);
    onClose();
  };

  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalWrapper ref={modalContainerRef}>
        <Title>{title}</Title>
        <RequestForm request={request ? request : null} register={register} errors={errors} />
        <Footer>
          <Button onClick={() => onClose()}>Отменить</Button>
          <Button onClick={handleSubmit(onSubmit)}>Сохранить</Button>
        </Footer>
      </ModalWrapper>
    </ModalContainer>,
    document.getElementById("modal")!
  );
};

export default Modal;
