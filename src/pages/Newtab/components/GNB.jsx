import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const gnbWrapper = css`
  height: 80px;
  background: white;
`;

const contentWrapper = css`
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const GNB = () => {
  return (
    <section css={gnbWrapper}>
      <div css={contentWrapper}>
        <div className="menu">menu</div>
        <div className="account">account</div>
      </div>
    </section>
  );
};

export default GNB;
