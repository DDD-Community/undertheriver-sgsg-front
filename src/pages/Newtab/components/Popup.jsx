import React, {useState} from "react";
import {Textarea, Input, Button} from "@chakra-ui/react"
/** @jsx jsx */
import {css, jsx} from '@emotion/react';

const textareaWrapper = css`
  padding: 48px 40px 16px 16px;
`;

const inputWrapper = css`
  display: flex;
  justify-contents: space-between;
  padding: 16px;
`;

const textareaBox = css`
  height: auto;
  padding: 5px 0 0 10px;
  color: #3c3a37;
  font-size: 16px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  line-height: 25.6px;
  border: none;
  resize: none;
  overflow-y: auto;

  &::placeholder {
    color: #a5aab2;
  }
`;

const inputBox = css`
  width: 270px;
  height: 40px;
  margin-right: 16px;
  background: #f7f7f7;
  color: #3c3a37;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  border: none;

  &::placeholder {
    color: #858585;
    opacity: 0.4;
  }
`;

const saveButton = css`
  width: 80px;
  height: 40px;
  background-color: #3c3a37;
  color: #fff;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;

  &:hover {
    background-color: #3c3a37;
    opacity: 0.8;
  }
`;

const closeButton = css`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 12px 12px;
  background-color: black;
  //background-image: url(./closeBtn.svg);
  //background-position: center;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Popup = (props) => {
    const [memo, setMemo] = useState({
        value: '',
        rows: 5,
        minRows: 5,
        maxRows: 10
    });
    const [keyword, setKeyword] = useState('');
    const [selectKeyword, setSelectKeyword] = useState([]);

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
    }

    // keyword input find words
    const keywordFind = (event) => {
        const tempArr = ["디자인", "여행", "맛집", "강아래팀"];
        let tempKey = [];

        tempArr.map((item) => {
            if (event.target.value === '') {
                return;
            } else if (item.includes(event.target.value)) {
                tempKey.push(item);
            }
            return item;
        });
        setKeyword(event.target.value);
        setSelectKeyword(tempKey);
    }

    // keyword input keypress event
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            if (selectKeyword.length > 0) {
                console.log(selectKeyword);
            } else {
                console.log(keyword);
            }
        }
        //TODO backspace
    }

    return (
        <main css={{
            display: props.popupActive ? "block" : "none",
            width: 400,
            minHeight: 280,
            maxHeight: 420,
            position: "absolute",
            left: 212,
            top: 208,
            boxShadow: "10px 10px 16px rgba(211, 207, 197, 0.7)",
            borderRadius: 2,
            backgroundColor: '#fff'
        }}>
            <a css={closeButton} onClick={() => props.popupResult('close')}></a>
            <div css={textareaWrapper}>
                <Textarea css={textareaBox}
                          placeholder="무엇이 떠오르세요?"
                          focusBorderColor="none"
                          rows={memo.rows}
                          value={memo.value}
                          onChange={memoChange}
                />
            </div>
            <div css={inputWrapper}>
                <Input css={inputBox}
                       placeholder="저장할 폴더의 이름을 입력하세요"
                       focusBorderColor="black"
                       autoComplete="off"
                       value={keyword}
                       onKeyPress={handleKeyPress}
                       onChange={keywordFind}
                />
                <Button css={saveButton} onClick={() => props.popupResult('submit')}>저장</Button>
            </div>
        </main>
    )
}

export default Popup;