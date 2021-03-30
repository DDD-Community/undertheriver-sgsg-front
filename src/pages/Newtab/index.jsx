import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import './index.css';

import { ChakraProvider } from "@chakra-ui/react"

function App() {
    return (
        <ChakraProvider resetCSS>
            <App />
        </ChakraProvider>
    )
}

render(<Newtab />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
