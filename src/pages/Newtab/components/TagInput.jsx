import React, { useState, useEffect } from 'react';
import { Input, Badge } from '@chakra-ui/react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import CloseTag from '../../../assets/img/closeTag.svg';

const inputBox = css`
  width: 16.875rem;
  height: 2.5rem;
  margin-right: 1rem;
  background: #f7f7f7;
  color: #3c3a37;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.188rem;
  border: none;

  &::placeholder {
    color: #858585;
    opacity: 0.4;
  }

  &.active {
    padding-left: 6.25rem;
  }
`;

const keywordTag = css`
  display: none;
  height: 1.5rem;
  padding: 0.125rem 0.5rem;
  position: absolute;
  top: 0.5rem;
  left: 0.813rem;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 2px;
  cursor: pointer;
  z-index: 99;

  &.active {
    display: block;
  }

  &.red {
    color: #e64632;
    background-color: rgba(230, 70, 50, 0.2);
  }
`;
const selectBox = css`
  width: 15.5rem;
  position: absolute;
  background: #fff;
  border-radius: 4px;
  margin-top: 0.5rem;
  box-shadow: 4px 4px 16px rgba(211, 207, 197, 0.7);
`;
const selectListItem = css`
  padding: 0.563rem 0.5rem;
  cursor: pointer;

  &:hover {
    background: rgba(60, 58, 55, 0.1);
  }

  &.active {
    background: rgba(60, 58, 55, 0.1);
  }
`;

const closeTagBtn = css`
  display: inline-block;
  width: 0.688rem;
  margin-left: 0.5rem;
  padding-bottom: 0.188rem;
`;

function TagInput() {
  const [keyword, setKeyword] = useState('');
  const [selectKeyword, setSelectKeyword] = useState([]);
  const [tempArr, setTempArr] = useState([]);
  const [findFlag, setFindFlag] = useState(false);
  const [tagFlag, setTagFlag] = useState(false);
  const [selectPosition, setSelectPosition] = useState(0);

  useEffect(() => {
    //TODO get folder name list API
    setTempArr(['디자인', '여행', '맛집', '강아래팀', '강아래']);
  }, []);

  useEffect(() => {
    if (keyword !== '') {
      keywordFind();
    }
  }, [keyword]);

  // keyword input find words
  const keywordFind = () => {
    let tempKey = [];

    tempArr.map((item) => {
      if (keyword === '') {
        return;
      } else if (item.includes(keyword)) {
        tempKey.push(item);
      }
      return item;
    });
    setSelectKeyword(tempKey);
  };

  // keyword input keypress event
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && keyword !== '') {
      if (selectKeyword.length > 0) {
        setFindFlag(true);
        setKeyword('');
      } else {
        setSelectKeyword([keyword]);
        setFindFlag(true);
        setKeyword('');
      }
    } else if (event.key === 'Backspace') {
      if (!tagFlag) {
        setTagFlag(true);
        return;
      }
      deleteTag();
    } else if (event.key === 'ArrowUp') {
      // top key press
      if (selectPosition > 0) {
        setSelectPosition(selectPosition - 1);
      }
    } else if (event.key === 'ArrowDown') {
      // down key press
      if (selectKeyword.length > selectPosition + 1) {
        setSelectPosition(selectPosition + 1);
      }
    }
  };

  // select List click keyword
  const handleSelectItem = () => {
    setFindFlag(true);
    setKeyword('');
  };

  // focus out keyword input
  const handleFocusOut = () => {
    if (keyword !== '' || keyword.length !== 0) {
      setSelectKeyword([keyword]);
      setFindFlag(true);
      setKeyword('');
    }
  };

  const deleteTag = () => {
    if (selectKeyword.length > 0 && tagFlag) {
      setFindFlag(false);
      setSelectKeyword([]);
      setTagFlag(false);
    }
  };

  const renderSelectList = () => {
    let html = [];

    selectKeyword.map((item, idx) => {
      html.push(
        <li
          css={selectListItem}
          className={selectPosition === idx && 'active'}
          key={idx}
          onClick={() => handleSelectItem()}
        >
          {item}
        </li>,
      );
    });

    return html;
  };

  return (
    <div css={{ position: 'relative' }} className="form-group">
      <Input
        css={inputBox}
        className={findFlag ? 'active' : ''}
        placeholder={findFlag ? '' : '저장할 폴더의 이름을 입력하세요'}
        focusBorderColor="black"
        autoComplete="off"
        value={keyword}
        onBlur={() => handleFocusOut()}
        onKeyDown={(e) => handleKeyPress(e)}
        onChange={findFlag ? undefined : (e) => setKeyword(e.target.value)}
      />
      <Badge css={keywordTag} className={findFlag ? 'active red' : ''} onClick={() => deleteTag()}>
        {selectKeyword[selectPosition]}
        {tagFlag && <img src={CloseTag} css={closeTagBtn} alt="Close Tag Button" />}
      </Badge>
      {!findFlag && selectKeyword.length > 0 && (
        <div css={selectBox}>
          <ul>{renderSelectList()}</ul>
        </div>
      )}
    </div>
  );
}

export default TagInput;
