require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
  },
};
