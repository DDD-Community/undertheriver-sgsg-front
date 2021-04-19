import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import GNB from './components/GNB';

const pageWrapper = css`
  background: #f9f7f2;
  height: calc(100vh - 80px);

  .login-wrapper {
    display: flex;
    max-width: 1280px;
    height: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
  }

  .login-box {
    width: 676px;
    height: 420px;
    background: #fff;
    box-shadow: 0px 8px 8px rgba(222, 218, 209, 0.5);
    border-radius: 8px;
    text-align: center;
  }

  .title {
    padding-top: 4.063rem;
    font-size: 2.625rem;
    font-weight: 300;
    line-height: 3.813rem;
  }

  .sub-txt {
    color: #a5aab2;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    padding-top: 3.375rem;
  }
`;
const clientId = '435245384070-qeqddufclaggtoo31sab5ckf3r3j8cfp.apps.googleusercontent.com';

const Login = () => {
  return (
    <>
      <GNB />
      <main css={pageWrapper}>
        <section className="login-wrapper">
          <div className="login-box">
            <h2 className="title">
              사각사각에 <br />
              오신걸 환영해요 :)
            </h2>
            <GoogleLogin
              clientId={clientId}
              onSuccess={(res) => {
                console.log(res);
              }}
              onFailure={(err) => {
                console.log(err);
              }}
            ></GoogleLogin>
            <p className="sub-txt">가입한 계정이 있다면? 로그인 하기</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
