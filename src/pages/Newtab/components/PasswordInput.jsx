import React, { useState } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { PinInput, PinInputField } from '@chakra-ui/react';

const pinInputField = css`
  margin-right: 8px;
`;

const PasswordField = () => {
  return (
    <div>
      <PinInput type="alphanumeric" mask>
        <PinInputField css={pinInputField} />
        <PinInputField css={pinInputField} />
        <PinInputField css={pinInputField} />
        <PinInputField />
      </PinInput>
    </div>
  );
};

export default PasswordField;
