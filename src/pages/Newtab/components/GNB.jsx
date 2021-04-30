import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const gnbWrapper = css`
  height: 80px;
  width: 100%;
  background: #f9f7f2;
  position: fixed;
  z-index: 10;
  border-bottom: 1px solid rgba(165, 170, 178, 0.3);
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
