import path from 'path';
import dotEnv from 'dotenv';

dotEnv.config();

module.exports = {

  client: 'mssql',
  connection: {
  host : process.env.HOST ,
  user : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  options: {
    enableArithAbort: true
  }
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: path.resolve(__dirname,'src','database','migrations')
  },
  seeds: {
    directory: path.resolve(__dirname,'src','database','seeds')
  }

};
