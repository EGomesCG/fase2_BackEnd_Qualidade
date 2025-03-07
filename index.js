const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Permitir configuração pela variável de ambiente

// Middleware para interpretar JSON
app.use(express.json());

// Importar rotas
const postagemRoute = require('./src/routes/postagem');
app.use('/postagem', postagemRoute);

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Tratamento de erros básico
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});