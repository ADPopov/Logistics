import React, { FC } from "react";
import { ButtonWrapper, Label } from "../../Requests/Requests.styled";

interface ButtonWithIconProps {
  icon?: JSX.Element | null;
  onClick: () => void;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ onClick, icon, children }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {icon}
      <Label>{children}</Label>
    </ButtonWrapper>
  );
};
