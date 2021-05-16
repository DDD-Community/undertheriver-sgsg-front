import React, { useState, useEffect } from 'react';
import { Textarea, Button } from '@chakra-ui/react';
import TagInput from './TagInput';
import Api, { checkFolder } from '../../api/api';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import CloseBtn from '../../../assets/img/closeBtn.svg';
import MemoComplete from '../../../assets/img/memoComplete.svg';

const textareaWrapper = css`
  padding: 3rem 1rem 0 1rem;
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

const inputWrapper = css`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
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

const completeWrapper = css`
  padding: 3.75rem 4.125rem 1.875rem;
  text-align: center;

  h2 {
    color: #3c3a37;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: normal;
    user-select: none;
  }

  img {
    margin: 2.688rem 0 1.875rem 0;
  }

  a {
    color: #a5aab2;
    font-size: 0.875rem;
    font-weight: 400;
    font-style: normal;
  }
`;

const closeButton = css`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.75rem;
  background-image: url(${CloseBtn});
  //background-position: center;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Popup = (props) => {
  const [loading, setLoading] = useState(false);
  const [memo, setMemo] = useState({
    value: '',
    rows: 6,
    minRows: 6,
    maxRows: 10,
  });
  const [submitFlag, setSubmitFlag] = useState(false);

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

  const writePopupResult = (type) => {
    if (type === 'submit') {
      setSubmitFlag(true);
    }
    // chrome-extension popup close
    if ((props.extension && type === 'close') || (props.extension && submitFlag)) {
      window.close();
      return;
    } else if (!props.extension) {
      props.setWritePopup({
        ...props.writePopup,
        flag: false,
      });
    }
  };

  const writeMemoApi = () => {
    try {
      let userId = '';
      setLoading(true);
      Api.checkFolder(userId)
        .then((response) => {
          setLoading(false);
          if (response.status === 200) {
            let data = response.data;
            if (data.code === 200) {
              console.log(data);
            } else {
              // error popup
            }
          } else {
            // error popup
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          // error popup
        });
    } catch (e) {
      setLoading(false);
      // error popup
    }
  };

  return (
    <aside
      css={{
        display: 'block',
        width: 400,
        minHeight: 280,
        maxHeight: 420,
        position: 'absolute',
        left: props.writePopup.flag ? props.writePopup.left : 0,
        top: props.writePopup.flag ? props.writePopup.top : 0,
        boxShadow: '0px 10px 16px rgba(211, 207, 197, 0.7)',
        borderRadius: 2,
        backgroundColor: '#fff',
        zIndex: 9,
      }}
    >
      <a css={closeButton} onClick={() => writePopupResult('close')}></a>
      {!submitFlag ? (
        <>
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
            <TagInput />
            <Button css={saveButton} onClick={() => writeMemoApi('submit')}>
              저장
            </Button>
          </div>
        </>
      ) : (
        <div css={completeWrapper}>
          <h2>사각사각에 저장되었어요!</h2>
          <img src={MemoComplete} alt="Memo Save Complete" />
          <a>사각사각으로 이동하기</a>
        </div>
      )}
    </aside>
  );
};
export default Popup;
