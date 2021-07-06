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

  .link-input {
    width: 17rem;
    padding: 0.625rem 2.5rem 0.625rem 2.25rem;
    background-color: #f7f7f7;
    background-image: url(${LinkIcon});
    background-repeat: no-repeat;
    background-position: 11px 10px;
    color: #a5aab2;
    font-size: 0.875rem;
    font-weight: 400;
    border-radius: 0.5rem;
    border: none;

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

function LinkPreview({ url, thumbnailUrl, setThumbnailUrl }) {
  useEffect(() => {
    if (url) {
      setThumbnailUrl(url);
    }
  }, [url]);

  return (
    <div css={linkWrapper}>
      <div className="link-box">
        <Input
          className="link-input"
          focusBorderColor="black"
          placeholder="첨부할 링크를 입력하세요"
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
        {thumbnailUrl !== '' && (
          <img src={removeLink} className="remove-btn" onClick={() => setThumbnailUrl('')} />
        )}
      </div>
    </div>
  );
}

export default LinkPreview;
