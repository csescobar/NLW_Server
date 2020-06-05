import path from 'path';

module.exports = {

  client: 'mssql',
  connection: {
  host : 'DESKTOP-7PG60SS',
  user : 'sa',
  password : '123456',
  database : 'eColeta',
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
