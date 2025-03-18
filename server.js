// Importando as dependências
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes'); // Ajuste o caminho se necessário

// Carregando variáveis de ambiente
dotenv.config();

// Inicializando o aplicativo Express
const app = express();

// Middleware
app.use(bodyParser.json());

// Conectando ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definindo as rotas
app.use('/posts', postRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app; 
