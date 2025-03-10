const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const postagemRoute = require('./src/routes/postRoutes'); // Certifique-se de que o caminho está correto

const app = express();
const port = process.env.PORT || 3001; // Alterado para evitar conflitos
const mongoURI = process.env.MONGODB_URI;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conexão com o MongoDB bem-sucedida!'))
.catch(err => console.error('❌ Erro de conexão com o MongoDB:', err));

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
app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
