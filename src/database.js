const mongoose = require('mongoose');
require('dotenv').config();

const server = process.env.SERVER; // SERVIDOR DE BD
const database = process.env.DATABASE; //NOME DO SEU BD

class Database {
    constructor() {
      this._connect();
    }
  
    _connect() {
      mongoose
        .connect(`mongodb://${server}/${database}`)
        .then(() => {
          console.log('Database connection successful');
        })
        .catch((err) => {
          console.error('Database connection error');
        });
    }
  }
  
  module.exports = new Database();