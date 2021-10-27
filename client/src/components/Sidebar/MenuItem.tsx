import React, { FC } from "react";
import styled from "styled-components";
import { IoMdListBox } from "react-icons/io";

const MenuItemWrapper = styled.li`
  list-style: none;
  padding: 0;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  height: 56px;
  padding-left: 32px;
  background-color: #35353b;
  cursor: pointer;
  :hover {
    background-color: #35353b;
  }

  :active {
    background-color: #35353b;
  }
`;

const LinkLabel = styled.div`
  padding-left: 10px;
  font-weight: 500;
`;

const TextWithIcon: FC<{ icon: JSX.Element }> = ({ children, icon }) => {
  return (
    <Wrapper>
      {icon}
      <LinkLabel>{children}</LinkLabel>
    </Wrapper>
  );
};

const MenuItem = () => {
  return (
    <MenuItemWrapper>
      <TextWithIcon
        icon={<IoMdListBox color="#f8aa43" size={32} />}
      >Заявки</TextWithIcon>
    </MenuItemWrapper>
  );
};

export default MenuItem;