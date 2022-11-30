import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import chakraTheme from "../../../common/chakraTheme";
import Root from "../Root";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={chakraTheme}>
        <Root />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
