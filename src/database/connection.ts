import knex from 'knex';

const connection = knex({
  client: 'mssql',
  connection: {
    host : 'DESKTOP-7PG60SS',
    user : 'sa',
    password : '123456',
    database : 'eColeta',
    options: {
      enableArithAbort: true
    }  
  }
});

export default connection;
