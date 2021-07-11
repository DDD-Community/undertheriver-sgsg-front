import React, { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import LinkIcon from '../../assets/img/icon-link.svg';
import removeLink from '../../assets/img/removeLink-btn.svg';

const linkWrapper = css`
  padding: 0 1rem;
  margin-top: 1rem;

  .link-box {
    min-height: 52px;
    display: flex;
    align-items: center;
  }

  .link-preview {
    width: 17rem;
    height: 3.25rem;
    padding: 0.625rem 1rem 0.625rem 1rem;
    background-color: #f7f7f7;
    font-size: 0.75rem;
    font-weight: 400;
    border-radius: 0.125rem;
    border: none;

    h4 {
      width: 10.5rem;
      color: #636972;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .link-url {
      display: flex;
      justify-contents: left;
      align-items: center;
    }

    h5 {
      width: 10.5rem;
      color: #a5aab2;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    img {
      width: 0.75rem;
      height: 0.75rem;
      margin-top: 0.175rem;
      margin-right: 0.25rem;
    }

    &::placeholder {
      color: #858585;
      opacity: 0.4;
    }
  }

  .remove-btn {
    position: relative;
    left: -2rem;
    cursor: pointer;
  }
`;

function LinkPreview({ setLinkFlag, currentTab }) {
  return (
    <div css={linkWrapper}>
      <div className="link-box">
        <div className="link-preview">
          <h4 className="link-title">[{currentTab.title}]</h4>
          <div className="link-url">
            {currentTab.favicon !== '' && <img src={currentTab.favicon} />}
            <h5>{currentTab.url}</h5>
          </div>
        </div>
        {currentTab.url !== '' && (
          <img src={removeLink} className="remove-btn" onClick={() => setLinkFlag(false)} />
        )}
      </div>
    </div>
  );
}

export default LinkPreview;
