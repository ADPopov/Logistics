import React, {FC} from 'react';
import styled from "styled-components";
import {IoMdListBox} from 'react-icons/io'

const MenuItemWrapper = styled.li`
  list-style: none;
  padding: 0;
  color: white;
`

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  height: 56px;
  padding-left: 32px;

  :hover {
    background-color: #35353B;
  }
`

const IconWrapper = styled.div`
  color: #f8aa43;
  height: 20px;
  font-size: 22px;

`

const LinkLabel = styled.div`
  padding-left: 10px;
  font-weight: 500;
`

const TextWithIcon: FC = () => {
    return (
        <Wrapper>
            <IoMdListBox color="#f8aa43" size={32}/>
            <LinkLabel>Заявки</LinkLabel>
        </Wrapper>
    );
}

const MenuItem = () => {
    return (
        <MenuItemWrapper>
            <TextWithIcon/>
        </MenuItemWrapper>
    );
};

export default MenuItem;