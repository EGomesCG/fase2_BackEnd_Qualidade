const express = require('express');
const app = express();
const port = 3000;

const postagemRoute = require('./src/routes/postagem');
app.use('/postagem', postagemRoute);

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});