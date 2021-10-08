import React from "react";
import { Router } from "./Routes/routes";
import GlobalStyle from "./Styles/global";

function App(): JSX.Element {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;
