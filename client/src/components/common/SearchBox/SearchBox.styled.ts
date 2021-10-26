import styled from "styled-components";

export const Icon = styled.div`
  position: relative;
  font-size: 20px;
  color: #777;
  text-align: center;
  margin-right: -50px;
  margin-left: 20px;
  margin-top: 10px;
  float: left;
  pointer-events: none;
`
export const Input = styled.input`
  flex: 1;
  height: 40px;
  background-color: #29292D;
  border: none;
  color: white;;
  outline: none;
  font-size: 14px;
  padding-left: 60px;
  width: 400px;
  border-radius: 5px;
  &:focus + ${Icon} {
    color: white;
  }
`
export const SearchBoxWrapper = styled.div`
  margin-bottom: 30px;
`