// tiny wrapper with default env vars
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  REACT_API_URL: process.env.REACT_APP_API_URL,
  REACT_LOGIN_URL: process.env.REACT_APP_LOGIN_URL,
};
