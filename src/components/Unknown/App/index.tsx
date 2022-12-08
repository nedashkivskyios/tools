import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import chakraTheme from "../../../common/chakraTheme";
import AuthProvider from "../AuthProvider";
import Root from "../Root";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <ChakraProvider theme={chakraTheme}>
            <GlobalStyle />
            <Root />
          </ChakraProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" panelPosition="right" />
    </QueryClientProvider>
  );
}

export default App;
