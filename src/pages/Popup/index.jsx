import React from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
// import Popup from './Popup';
import Popup from '../Newtab/components/Popup';
import './index.css';

function App() {
  return (
    <ChakraProvider resetCSS>
      <Popup />
    </ChakraProvider>
  );
}

render(<App />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
