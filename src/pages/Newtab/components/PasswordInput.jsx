import React, { useState } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { PinInput, PinInputField } from '@chakra-ui/react';

const PasswordField = () => {
  return (
    <div>
      <PinInput type="alphanumeric" mask>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </div>
  );
};

export default PasswordField;
