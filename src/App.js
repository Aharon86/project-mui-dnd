import React from "react";
import { CssBaseline, Container } from "@material-ui/core";
import OffersContainer from "./containers/OffersContainer/OffersContainer";

function App() {
  return (
    <>
      <CssBaseline />
      <Container style={{ minWidth: "480px", maxWidth: "1768px" }}>
        <OffersContainer />
      </Container>
    </>
  );
}

export default App;
