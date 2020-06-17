import knex from 'knex';
import dotEnv from 'dotenv';

dotEnv.config();

const connection = knex({
  client: 'mssql',
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    options: {
      enableArithAbort: true
    }
  }
});

export default connection;
