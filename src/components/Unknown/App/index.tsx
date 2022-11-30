import React from 'react';
import Root from "../Root";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import chakraTheme from "../../../common/chakraTheme";

function App() {
    return (
        <BrowserRouter>
            <ChakraProvider theme={chakraTheme}>
                <Root/>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
