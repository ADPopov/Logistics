import React, { useEffect } from "react";
import styled from "styled-components";
import Requests from "./components/Requests/Requests";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAction } from "./hooks/useAction";

const Container = styled.div`
`;

function App() {
  const { getRequests } = useAction();

  useEffect(() => {
    getRequests();
  });

  return (
    <Container>
      <Requests />
    </Container>
  );
}

export default App;
