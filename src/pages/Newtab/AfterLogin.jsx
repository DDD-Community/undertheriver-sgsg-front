import React, { useEffect } from 'react';
import { createHashHistory } from 'history';

const history = createHashHistory();

const AfterLogin = () => {
  useEffect(() => {
    try {
      const location = window.location.search;
      const params = new URLSearchParams(location);
      let token = params.get('token');
      if (token) {
        if (token.charAt(token.length - 1) === '#') {
          token = token.slice(0, token.length - 2);
        }
        localStorage.setItem('access_token', token);
        // history.push({ pathname: '/' });
        window.location.href = 'http://localhost:3000/newtab.html#/'; //## TODO 수정 사항
      }
    } catch (e) {
      history.push('/login');
    }
  }, []);
  return <></>;
};

export default AfterLogin;
