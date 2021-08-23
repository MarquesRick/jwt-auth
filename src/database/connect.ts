import {createConnection} from 'typeorm'

const oracledb = require('oracledb');
if (process.platform === 'darwin') {
  try {
    oracledb.initOracleClient({libDir: process.env.HOME + '/Downloads/instantclient_19_8'});
  } catch (err) {
    console.error('Whoops!');
    console.error(err);
    process.exit(1);
  }
}
createConnection().then(() => console.log('📦 Sucessfully connected to company Database'));
