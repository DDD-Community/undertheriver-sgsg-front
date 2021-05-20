import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import GNB from './components/GNB';
import GoogleIcon from '../../assets/img/icon-google.png';

const pageWrapper = css`
  background: #f9f7f2;
  height: 100vh;

  .login-wrapper {
    display: flex;
    max-width: 1280px;
    height: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
  }

  .login-box {
    width: 42.25rem;
    height: 26.25rem;
    background: #fff;
    box-shadow: 0px 8px 8px rgba(222, 218, 209, 0.5);
    border-radius: 8px;
    text-align: center;
  }

  h2 {
    padding-top: 4.063rem;
    font-size: 2.625rem;
    font-weight: 300;
    //line-height: 3.813rem;
  }
`;

const googleLoginWrapper = css`
  padding-top: 3.375rem;

  button {
    padding: 1rem 4rem;
    color: #636972;
    font-weight: 700;
    background-color: #f7f7f7;
    border: 1px solid rgba(165, 170, 178, 0.3);
    border-radius: 50px;
    box-shadow: none;
  }

  img {
    display: inline-block;
    width: 1.625rem;
    height: 1.688rem;
    margin-right: 0.75rem;
  }

  button:hover {
    background-color: #eeeff1 !important;
  }
`;

const subTextWrapper = css`
  padding: 3rem 0 2.813rem;

  a {
    color: #a5aab2;
    font-size: 0.875rem;
    font-weight: 400;
    //line-height: 1.25rem;
  }
`;

const Login = () => {
  const googleLogin = () => {
    location.href = `http://api.sgsg.space/oauth2/authorization/google?redirect_uri=${process.env.LOGIN_URL}`;
  };

  return (
    <>
      <GNB />
      <main css={pageWrapper}>
        <section className="login-wrapper">
          <div className="login-box">
            <h2>
              사각사각에 <br />
              오신걸 환영해요 :)
            </h2>
            <div css={googleLoginWrapper}>
              <button onClick={() => googleLogin()}>
                <img src={GoogleIcon} />
                구글로 시작하기
              </button>
            </div>
            <div css={subTextWrapper}>
              <a href="">개인 정보 이용 약관 바로가기</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
