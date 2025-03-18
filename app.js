const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const postagemRoute = require('./src/routes/postRoutes.js'); // Importa as rotas

const app = express();
const port = process.env.PORT || 3001; // Define a porta
const mongoURI = process.env.MONGODB_URI;

// Middleware
app.use(cors()); // Habilita CORS
app.use(bodyParser.json());

// Conexão com o MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexão com o MongoDB bem-sucedida!'))
.catch(err => console.error('Erro de conexão com o MongoDB:', err));

// Rotas
app.use('/postagem', postagemRoute); // Define a rota principal para postagem

// Rota padrão
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app; 