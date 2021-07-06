import axios from 'axios';
import { createHashHistory } from 'history';

const history = createHashHistory();

const apiPrefix = 'https://api.sgsg.space/v1';

function baseApi(apiUrl) {
  return axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function getAccessTokenHeader() {
  let auth = 'Bearer' + ` ` + localStorage.getItem('access_token');
  return { headers: { Authorization: auth } };
}

function successStatusCheck(response, resolve) {
  if (response.status === 200) {
    resolve(response);
  } else if (response.status === 401) {
    moveLogin();
  } else {
    resolve('error');
  }
}

function failStatusCheck(err, reject) {
  if (err.response && err.response.status === 401) {
    moveLogin();
  } else {
    reject(err);
  }
}

function moveLogin() {
  localStorage.removeItem('access_token');
  history.push('/login');
}

//## 다음 폴더 색상 조회
export function checkFolderColor() {
  return new Promise((resolve, reject) => {
    return baseApi(apiPrefix)
      .get('/folders/color', getAccessTokenHeader())
      .then((response) => {
        successStatusCheck(response, resolve);
      })
      .catch((err) => {
        failStatusCheck(err, reject);
      });
  });
}

export function checkFolder(orderBy) {
  return new Promise((resolve, reject) => {
    return baseApi(apiPrefix)
      .get('/folders' + '?' + 'orderBy=' + orderBy, getAccessTokenHeader())
      .then((response) => {
        successStatusCheck(response, resolve);
      })
      .catch((err) => {
        failStatusCheck(err, reject);
      });
  });
}

//## 메모 생성
export function createMemo(data) {
  return new Promise((resolve, reject) => {
    return baseApi(apiPrefix)
      .post('/memos', data, getAccessTokenHeader())
      .then((response) => {
        successStatusCheck(response, resolve);
      })
      .catch((err) => {
        failStatusCheck(err, reject);
      });
  });
}

export default {
  checkFolderColor,
  checkFolder,
  createMemo,
};
