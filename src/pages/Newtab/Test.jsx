import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Popup from './components/Popup';
import { css, jsx } from '@emotion/react';

/** @jsx jsx */

const Test = () => {
  const [popup, setPopup] = useState(true); // default false

  const popupResult = (type) => {
    setPopup(false);
    if (type === 'close') {
      return;
    }
    //TODO save memo keyword /팝업에서 처리
  };

  return (
    <>
      <main className="wrapper">
        <Box bg="tomato" w="100%" p={4} color="white">
          <div onClick={() => setPopup(true)}>test Box</div>
        </Box>
      </main>
      <Popup popupActive={popup} popupResult={popupResult} />
    </>
  );
};

export default Test;
