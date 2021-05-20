// tiny wrapper with default env vars
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  API_URL: process.env.API_URL,
  LOGIN_URL: process.env.LOGIN_URL,
};
