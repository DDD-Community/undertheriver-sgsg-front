import React, { useEffect } from 'react';
import { createHashHistory } from 'history';

const history = createHashHistory();

/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import GoogleIcon from '../../assets/img/icon-google.png';
import MainLogo from '../../assets/img/mainLogo.svg';
import { Link } from 'react-router-dom';

const loginWrapper = css`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;

  .main-logo {
    width: 100%;
    background-color: #f9f7f2;
  }

  .main-logo figure {
    width: 130px;
  }

  .login-box {
    width: 400px;
    min-height: 280px;
    background: #fff;
    box-shadow: 0px 8px 8px rgba(222, 218, 209, 0.5);
    border-radius: 8px;
    text-align: center;
  }
`;

const googleLoginWrapper = css`
  padding-top: 4rem;

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

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      history.push('/popup');
      return;
    }
    window.addEventListener('message', getToken, false);
    return () => {
      window.removeEventListener('message', getToken, false);
    };
  }, []);

  const getToken = (data) => {
    if (data.data === 'success') {
      setTimeout(() => {
        history.push('/popup');
      }, 1000);
    }
  };

  const googleLogin = () => {
    window.open(
      'https://api.sgsg.space/oauth2/authorization/google?redirect_uri=chrome-extension://cbcfldfiodebkafgjhiokikamikajekn/popup.html#/after-login',
      'childWin',
      'width=400, height=280, toolbar=no, menubar=no, scrollbars=no, resizable=yes',
    );
  };

  return (
    <aside
      css={{
        display: 'block',
        width: 400,
        height: 280,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#fff',
      }}
    >
      <section css={loginWrapper}>
        <div className="login-box">
          <div className="main-logo">
            <a href="https://sgsg.space" target="_blank">
              <figure>
                <img src={MainLogo} className="main-logo" alt="A logo for sagaksagak website" />
              </figure>
            </a>
          </div>
          <div css={googleLoginWrapper}>
            <button onClick={() => googleLogin()}>
              <img src={GoogleIcon} />
              구글로 시작하기
            </button>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Login;
