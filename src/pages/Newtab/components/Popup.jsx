import React, { useState, useEffect } from 'react';
import { Textarea, Input, Button, Badge } from '@chakra-ui/react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const textareaWrapper = css`
  padding: 3rem 1rem 0 1rem;
`;

const inputWrapper = css`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const textareaBox = css`
  height: auto;
  padding: 0.313rem 0 0 0.625rem;
  color: #3c3a37;
  font-size: 1rem;
  font-style: normal;
  font-weight: normal;
  line-height: 1.6rem;
  border: none;
  resize: none;
  overflow-y: auto;

  &::placeholder {
    color: #a5aab2;
  }
`;

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

const saveButton = css`
  width: 5rem;
  height: 2.5rem;
  background-color: #3c3a37;
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.375rem;

  &:hover {
    background-color: #3c3a37;
    opacity: 0.8;
  }
`;

const closeButton = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.75rem;
  background-color: black;
  //background-image: url(../../../assets/img/closeBtn.svg);
  //background-position: center;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  cursor: pointer;
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
  border-radius: 0.25rem;
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

const Popup = (props) => {
  const [memo, setMemo] = useState({
    value: '',
    rows: 6,
    minRows: 6,
    maxRows: 10,
  });
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

  // memo Textarea size control
  const memoChange = (event) => {
    const textareaLineHeight = 24;
    const previousRows = event.target.rows;
    event.target.rows = memo.minRows;

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (currentRows >= memo.maxRows) {
      event.target.rows = memo.maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    //TODO URL contents Check

    setMemo({
      ...memo,
      value: event.target.value,
      rows: currentRows < memo.maxRows ? currentRows : memo.maxRows,
    });
  };

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
      if (selectKeyword.length > 0 && tagFlag) {
        setFindFlag(false);
        setSelectKeyword([]);
        setTagFlag(false);
      }
      if (!tagFlag) {
        setTagFlag(true);
      }
    } else if (event.keyCode == 38) {
      // top key press
      if (selectPosition > 0) {
        setSelectPosition(selectPosition - 1);
      }
    } else if (event.keyCode == 40) {
      // down key press
      if (selectKeyword.length > position) {
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
    if (keyword !== '') {
      setSelectKeyword([keyword]);
      setFindFlag(true);
      setKeyword('');
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
    <main
      css={{
        // display: props.popupActive ? 'block' : 'none',
        display: 'block',
        width: 400,
        minHeight: 280,
        maxHeight: 420,
        position: 'absolute',
        left: 0,
        top: 0,
        boxShadow: '10px 10px 16px rgba(211, 207, 197, 0.7)',
        borderRadius: 2,
        backgroundColor: '#fff',
      }}
    >
      <a css={closeButton} onClick={() => props.popupResult('close')}></a>
      <div css={textareaWrapper}>
        <Textarea
          css={textareaBox}
          placeholder="무엇이 떠오르세요?"
          focusBorderColor="none"
          rows={memo.rows}
          value={memo.value}
          onChange={memoChange}
        />
      </div>
      <div css={inputWrapper}>
        <div css={{ position: 'relative' }} className="form-group">
          <Input
            css={inputBox}
            className={findFlag ? 'active' : ''}
            placeholder={findFlag ? '' : '저장할 폴더의 이름을 입력하세요'}
            focusBorderColor="black"
            autoComplete="off"
            value={keyword}
            onBlur={() => handleFocusOut()}
            onKeyDown={handleKeyPress}
            onChange={findFlag ? undefined : (e) => setKeyword(e.target.value)}
          />
          <Badge css={keywordTag} className={findFlag ? 'active red' : ''}>
            {/* TODO temp code */}
            {selectKeyword[selectPosition] + (tagFlag ? 'X' : '')}
          </Badge>
          {!findFlag && selectKeyword.length > 0 && (
            <div css={selectBox}>
              <ul>{renderSelectList()}</ul>
            </div>
          )}
        </div>
        <Button css={saveButton} onClick={() => props.popupResult('submit')}>
          저장
        </Button>
      </div>
    </main>
  );
};

export default Popup;
