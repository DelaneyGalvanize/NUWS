'use strict';

module.exports = {
  "development": {
    "client": 'pg',
    "connection": 'postgres://localhost/nuwsapp_dev'
  },
  "test": 'postgres://localhost/nuwsapp_test',

  "production": {
    "client": 'pg',
    "connection": process.env.DATABASE_URL
  }
};
