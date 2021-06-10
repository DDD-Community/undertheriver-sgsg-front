import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    chrome.tabs.update({ url: 'https://sgsg.space' });
  }, []);

  return (
    <>
      {/*<GNB />*/}
      {/*<main css={pageWrapper}>*/}
      {/*  <section className="login-wrapper">*/}
      {/*    <div className="login-box">*/}
      {/*      <h2>*/}
      {/*        사각사각에 <br />*/}
      {/*        오신걸 환영해요 :)*/}
      {/*      </h2>*/}
      {/*      <div css={googleLoginWrapper}>*/}
      {/*        <button onClick={() => googleLogin()}>*/}
      {/*          <img src={GoogleIcon} />*/}
      {/*          구글로 시작하기*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*      <div css={subTextWrapper}>*/}
      {/*        <a href="">개인 정보 이용 약관 바로가기</a>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </section>*/}
      {/*</main>*/}
    </>
  );
};

export default Login;
