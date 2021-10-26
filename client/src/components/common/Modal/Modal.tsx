import React, {FC, useRef} from 'react';
import ReactDOM from "react-dom";
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import RequestForm, {IRequestFormInput} from "../forms/RequestForm";
import {SubmitHandler, useForm} from "react-hook-form";
import {Request} from "../../../models/Request";
import {Button, Footer, ModalContainer, ModalWrapper, Title} from "./Modal.styled";


const Modal: FC<{ onClose: () => void, request?: Request | null }> = ({onClose, request}) => {
    const modalContainerRef = useRef(null);
    const clickOutsideHandler = () => onClose();
    useOnClickOutside(modalContainerRef, clickOutsideHandler);

    const onSubmit: SubmitHandler<IRequestFormInput> = data => {
        console.log(data);
        onClose();
    };

    const {
        handleSubmit,
        register,
    } = useForm<IRequestFormInput>()

    return ReactDOM.createPortal(
        <ModalContainer>
            <ModalWrapper ref={modalContainerRef}>
                <Title>Заявка</Title>
                <RequestForm request={request ? request : null} register={register}/>
                <Footer>
                    <Button>Отменить</Button>
                    <Button onClick={handleSubmit(onSubmit)}>Сохранить</Button>
                </Footer>
            </ModalWrapper>
        </ModalContainer>, document.getElementById('modal')!
    )
};

export default Modal;