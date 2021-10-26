import React, {FC} from "react";
import {ButtonWrapper, Label} from "../../Requests/Requests.styled";
import {IoMdAddCircleOutline} from "react-icons/io";

export const ButtonWithIcon: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({...props}) => {
    return (
        <ButtonWrapper {...props}>
            <IoMdAddCircleOutline size={25}/>
            <Label>Добавить заявку</Label>
        </ButtonWrapper>
    );
}