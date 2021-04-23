  
const dotenv = require('dotenv');

dotenv.config();
const databaseEnvDetails = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialect: 'postgres',
  logging: false,
};

const config = {
  development: {
    database: process.env.DB_CONFIG_DEV,
    ...databaseEnvDetails,
  },
  test: {
    database: process.env.TEST_DB,
    ...databaseEnvDetails
  },
  production: {
    DATABASE_URL: process.env.DATABASE_URL
  }
};

module.exports = config;