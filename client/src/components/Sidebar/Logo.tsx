import React from 'react';
import styled from "styled-components";
import {Logo as Logotype} from "../common/Logo";

const LogoWrapper = styled.div`
  padding: 50px 0 30px 35px;
`

const Logo = () => {
    return (
        <LogoWrapper>
            <Logotype />
        </LogoWrapper>
    );
};

export default Logo;