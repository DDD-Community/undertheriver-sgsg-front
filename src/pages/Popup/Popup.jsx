import React, { useState, useEffect } from 'react';
import { Textarea, Button } from '@chakra-ui/react';
import Api from '../api/api';
import TagInput from './TagInput';
import LinkPreview from './LinkPreview';
import { Howl } from 'howler';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import CloseBtn from '../../assets/img/closeBtn.svg';
import MemoComplete from '../../assets/img/memoComplete.svg';
import penSound from '../../assets/sounds/penSound.mp3';

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
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Popup = (props) => {
  const [loading, setLoading] = useState(false);
  const [memo, setMemo] = useState({
    value: '',
    nextColor: '',
    rows: 6,
    minRows: 6,
    maxRows: 10,
  });
  const [selectKeyword, setSelectKeyword] = useState([]);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [wrongFlag, setWrongFlag] = useState(false);
  const [currentTab, setCurrentTab] = useState({
    url: '',
    title: '',
  });
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      // console.log(tabs[0]);
      if (tabs[0]) {
        setCurrentTab({ url: tabs[0].url, title: tabs[0].title });
      }
    });
    checkFolderApi();
    checkFolderColorApi();
  }, []);

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
      if (selectKeyword.length === 0) {
        setWrongFlag(true);
        return;
      }

      let findId = null;
      if (folderList.length > 0) {
        for (let i = 0; i < folderList.length; i++) {
          if (selectKeyword[0] === folderList[i].title) {
            findId = folderList[i].id;
          }
        }
      }
      writeMemoApi(findId);
      setSubmitFlag(true);
    }
    // chrome-extension popup close
    if (type === 'close' || submitFlag) {
      window.close();
    }
  };

  const effectSound = (src, volume = 1) => {
    let sound;
    const soundInject = (src) => {
      sound = new Howl({ src });
      sound.volume(volume);
    };
    soundInject(src);
    return sound;
  };

  const checkFolderApi = () => {
    try {
      setLoading(true);
      Api.checkFolder('CREATED_AT')
        .then((response) => {
          setLoading(false);
          if (response.status === 200) {
            const data = response.data;
            if (data.success) {
              setFolderList(data.response);
            } else {
              // setErrorPopup({ active: 'active', content: defaultMsg });
            }
          } else {
            // setErrorPopup({ active: 'active', content: defaultMsg });
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          // setErrorPopup({ active: 'active', content: defaultMsg });
        });
    } catch (e) {
      setLoading(false);
      // setErrorPopup({ active: 'active', content: defaultMsg });
    }
  };

  const checkFolderColorApi = () => {
    try {
      setLoading(true);
      Api.checkFolderColor()
        .then((response) => {
          setLoading(false);
          if (response.status === 200) {
            const data = response.data;
            if (data.success) {
              setMemo({
                ...memo,
                nextColor: data.response.nextColor,
              });
              localStorage.setItem('next_color', data.response.nextColor);
            } else {
              // setErrorPopup({ active: 'active', content: defaultMsg });
            }
          } else {
            // setErrorPopup({ active: 'active', content: defaultMsg });
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          // setErrorPopup({ active: 'active', content: defaultMsg });
        });
    } catch (e) {
      setLoading(false);
      // setErrorPopup({ active: 'active', content: defaultMsg });
    }
  };

  const writeMemoApi = (id) => {
    try {
      const obj = {
        memoContent: memo.value,
        folderId: id ? id : null,
        folderColor: memo.nextColor,
        folderTitle: selectKeyword[0],
        thumbnailUrl: thumbnailUrl,
      };
      setLoading(true);
      Api.createMemo(obj)
        .then((response) => {
          setLoading(false);
          if (response.status === 200) {
            const data = response.data;
            if (data.success) {
              const es = effectSound(penSound, 1);
              es.play();
            } else {
              // setErrorPopup({ active: 'active', content: defaultMsg });
            }
          } else {
            // setErrorPopup({ active: 'active', content: defaultMsg });
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          // setErrorPopup({ active: 'active', content: defaultMsg });
        });
    } catch (e) {
      setLoading(false);
      // setErrorPopup({ active: 'active', content: defaultMsg });
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
          {currentTab.url !== '' && (
            <LinkPreview
              url={currentTab.url}
              thumbnailUrl={thumbnailUrl}
              setThumbnailUrl={setThumbnailUrl}
              setCurrentTab={setCurrentTab}
            />
          )}
          <div css={inputWrapper}>
            <TagInput
              color={memo.nextColor}
              wrongFlag={wrongFlag}
              setWrongFlag={setWrongFlag}
              selectKeyword={selectKeyword}
              setSelectKeyword={setSelectKeyword}
            />
            <Button css={saveButton} onClick={() => writePopupResult('submit')}>
              저장
            </Button>
          </div>
        </>
      ) : (
        <div css={completeWrapper}>
          <h2>사각사각에 저장되었어요!</h2>
          <img src={MemoComplete} alt="Memo Save Complete" />
          <a href="https://sgsg.space" target="_blank">
            사각사각으로 이동하기
          </a>
        </div>
      )}
    </aside>
  );
};
export default Popup;
