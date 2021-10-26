import React from "react";
import MenuItem from "./MenuItem";
import styled from "styled-components";

const NavWrapper = styled.ul`
  padding : 0;
`;

const NavMenu = () => {
  return (
    <div>
      <NavWrapper>
        <MenuItem />
      </NavWrapper>
    </div>
  );
};

export default NavMenu;
