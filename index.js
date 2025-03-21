const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const postagemRoute = require('./src/routes/postRoutes.js'); // Certifique-se de que o caminho está correto

const app = express();
const port = process.env.PORT || 3001; // Alterado para evitar conflitos
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nome_do_banco'; // Usando a variável de ambiente

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB', err));

// Definição das rotas
app.use('/posts', postagemRoute);

// Rota padrão
app.get('/', (req, res) => {
    res.send('API está rodando corretamente!');
});

// Middleware para capturar erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Inicia o servidor
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
}

// Exporta o app

module.exports = app;
