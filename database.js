const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI; // Use a variável de ambiente para a URI

class Database {
    constructor() {
        this._connect();
    }
  
    _connect() {
        mongoose
            .connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(() => {
                console.log('Conexão com o banco de dados bem-sucedida');
            })
            .catch((err) => {
                console.error('Erro de conexão com o banco de dados:', err);
            });
    }
}
  
module.exports = new Database();