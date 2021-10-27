import styled from "styled-components";

export const Stack = styled.div``;
export const ControlForm = styled.div``;
export const FormLabel = styled.div`
  font-size: 12px;
  color: #B7B7BA;
  margin-bottom: 4px;
  margin-top: 16px;
`;
export const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 2px solid #2b2b2c;
  outline: none;
  background-color: #35353B;
  color: #B7B7BA;
  border-radius: 10px;
  
  :focus {
    border: 2px solid #f69301;
    border-radius: 4px;
  }
`;
export const ErrorBox = styled.div`
  margin-top: 2px;
  color: red;
  size: 12px ;
`;