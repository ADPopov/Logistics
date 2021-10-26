import React from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import NavMenu from './NavMenu';

const Wrapper = styled.div`
  background-color: #29292D;
`;

const Sidebar = () => {
    return (
        <Wrapper>
            <Logo />
            <NavMenu />
        </Wrapper>
    );
};

export default Sidebar;