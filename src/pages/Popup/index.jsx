import React, { useState } from 'react';
import { render } from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Popup from '../Popup/Popup';
import './index.css';

function App() {
  const [writePopup, setWritePopup] = useState({
    flag: true,
    left: 0,
    top: 0,
  });

  return (
    <ChakraProvider resetCSS>
      {writePopup.flag && <Popup extension writePopup={writePopup} setWritePopup={setWritePopup} />}
    </ChakraProvider>
  );
}

render(<App />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
