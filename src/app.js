const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const postagemRoute = require('./src/routes/postagem'); // Importa as rotas

const app = express();
const port = process.env.PORT || 3000; // Define a porta
const mongoURI = process.env.MONGODB_URI;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com o MongoDB
mongoose.connect(`mongodb://${process.env.SERVER}/${process.env.DATABASE}`, {
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

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
