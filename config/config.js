const dotenv = require('dotenv');

module.exports = async ({ options, resolveConfigurationProperty }) => {
  let path;
  if (process.env.NODE_ENV === 'production') {
    path = '.env.prod';
  } else if (process.env.NODE_ENV === 'development') {
    path = '.env.dev';
  } else {
    path = '.env.local';
  }

  return dotenv.config({ path: path }).parsed;
};