import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
    styles: {
        global: {
            'html, body': {
                background: 'teal.50',
            },
        },
    },
});

export default chakraTheme;
