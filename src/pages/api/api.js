import axios from 'axios';
import { createHashHistory } from 'history';

const history = createHashHistory();

// const apiPrefix = process.env.REACT_APP_API_URL;
const apiPrefix = 'http://sgsg.space:80/api/v1/'; //## TODO 수정 사항

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

export function checkFolder(userId) {
  return new Promise((resolve, reject) => {
    return baseApi(apiPrefix)
      .get('/folders' + '/' + userId, getAccessTokenHeader())
      .then((response) => {
        successStatusCheck(response, resolve);
      })
      .catch((err) => {
        failStatusCheck(err, reject);
      });
  });
}

export default {
  checkFolder,
};
