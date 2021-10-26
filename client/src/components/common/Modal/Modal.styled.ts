import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalWrapper = styled.main`
  width: 480px;
  box-shadow: 0 8px 22px -6px rgba(18, 20, 23, 0.12), 0px 14px 64px -4px rgba(18, 20, 23, 0.12);
  border-radius: 24px;
  padding: 32px;
  background-color: #3f3e3e;
  display: flex;
  color: white;
  flex-direction: column;
`
export const Title = styled.h1`
  margin: 0;
  padding: 0 0 16px 0;
`
export const Body = styled.div`
  position: relative;
  width: 100%;
  flex: 1 1 auto;

`
export const Footer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 20px;
`
export const Button = styled.button`
  background-color: #f89400;
  border: 0;
  cursor: pointer;
  padding: 10px 12px;
  margin-right: 10px;
  border-radius: 10px;
  color: white;
  font-size: 16px;

  :first-child {
    background-color: #767575;

    :hover {
      background-color: #5d5d5d;
    }
  }

  :last-child {
    margin-right: 0;

    :hover {
      background-color: #c77701;
    }
  }
`