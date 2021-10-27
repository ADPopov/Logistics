import styled from "styled-components";

export const Label = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-left: 20px;
`
export const Wrapper = styled.div`
  background-color: #1d1d20;
  padding: 30px;
  color: white;
`;
export const PageHeader = styled.div`
  margin: 0 0 20px;
  display: flex;
  justify-content: space-between;
`;
export const Header = styled.h1`
  color: #E2E2E2
`;
export const ButtonWrapper = styled.button`
  display: flex;
  margin: 0;
  align-items: center;
  height: 48px;
  padding: 5px 20px;
  border-radius: 20px;
  color: white;
  background-color: #F89406;
  border: 0;
  cursor: pointer;

  :hover {
    background-color: #c77701;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


