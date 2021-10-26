import React from "react";
import styled from "styled-components";
import Requests from "./components/Requests/Requests";
import Sidebar from "./components/Sidebar/Sidebar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 4fr;
  grid-template-rows: 100vh;
  grid-template-areas: ". .";
`;

function App() {
  return (
    <Container>
      <Sidebar />
      <Requests />
    </Container>
  );
}

export default App;
