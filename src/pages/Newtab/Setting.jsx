import React, { useState } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Switch } from '@chakra-ui/react';
import GNB from './components/GNB';
import PasswordInput from './components/PasswordInput';
import PasswordInputModal from './components/PasswordInputModal';

const pageWrapper = css`
  background: #f9f7f2;
  min-height: 100vh;

  .content-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    height: 100vh;
    width: 62.5%;
    margin: auto;
    padding-top: 10.625rem;
    padding-bottom: 25vh;
  }

  .page-title {
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  .list-wrapper {
    display: flex;
    justify-content: space-between;
    width: 50rem;
    height: 10rem;
    align-items: center;
    border-bottom: 1px solid rgba(165, 170, 178, 0.5);
  }

  .logout-btn {
    align-self: flex-end;
    background: #a5aab2;
    border-radius: 3.75rem;
    width: 10rem;
    height: 3.5rem;
    padding: 1rem 3.125rem;
    margin-top: 2.75rem;
    color: white;
    font-weight: bold;
  }
`;
const Setting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  function onOpenModal() {
    setIsModalVisible(true);
  }
  return (
    <>
      <GNB />
      <section css={pageWrapper}>
        <div className="content-wrapper">
          <h3 className="page-title">설정</h3>
          <div className="list-wrapper">연동 이메일</div>
          <div className="list-wrapper">
            메모 비밀번호 설정
            <button className="setting-btn" onClick={onOpenModal}>
              비밀번호 변경
            </button>
            <PasswordInputModal visible={isModalVisible} onChange={setIsModalVisible} />
          </div>
          <div className="list-wrapper">
            새 탭에서 시작
            <Switch size="lg" />
          </div>
          <button className="logout-btn">로그아웃</button>
        </div>
      </section>
    </>
  );
};

export default Setting;
