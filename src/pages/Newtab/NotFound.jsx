import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import GNB from './components/GNB';
import NotFoundImage from '../../assets/img/notFound.svg';

const pageWrapper = css`
  background: #f9f7f2;
  height: 100%;

  .content-wrapper {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    min-height: 100vh;
    height: 100%;
    margin: auto;
  }

  img {
    display: inline-block;
    width: 11.25rem;
    height: 11.25rem;
  }

  h2 {
    margin-top: 3.5rem;
    color: #636972;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
  }

  p {
    margin-top: 0.625rem;
    color: #636972;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
  }
`;

const NotFound = () => {
  return (
    <>
      <GNB />
      <main css={pageWrapper}>
        <div className="content-wrapper">
          <div className="title-wrapper">
            <img src={NotFoundImage} />
            {/*<h2>*/}
            {/*  인터넷에 연결되어 있지 않아요! <br />*/}
            {/*  <strong>네트워크를 확인</strong>해주세요.*/}
            {/*</h2>*/}
            {/*<h2>*/}
            {/*  <strong>알수없는 오류</strong>가 발생했어요!*/}
            {/*  <br /> 다시 시도해 주세요.*/}
            {/*</h2>*/}
            <h2>요청하신 페이지를 찾을 수 없어요.</h2>
            <p>
              페이지 주소를 찾을 수 없거나, 변경되어 확인할 수 없습니다.
              <br /> 페이지 주소를 다시 한번 확인해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
