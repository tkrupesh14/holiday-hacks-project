import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./components/App";
import theme from "./styles/theme";

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById("root")
);
