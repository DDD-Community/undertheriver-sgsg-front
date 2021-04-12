import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const squareLine = css`
  padding-top: 2rem;
  width: 0.8125rem;
  text-align: center;
  margin: auto;
  height: 0;
  border-top: 0.125rem solid white;
`;

const Folder = ({ color }) => {
  return (
    <div
      css={{
        width: '2.5rem',
        height: '2.5rem',
        background: `${color}`,
        paddingTop: '0.75rem',
        borderRadius: '0.125rem',
      }}
    >
      <hr css={squareLine} />
    </div>
  );
};
export default Folder;
