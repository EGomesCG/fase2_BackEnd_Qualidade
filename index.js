const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const postagemRoute = require('./src/routes/postRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// Configuração Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Posts',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de posts',
    },
    servers: [{ url: 'http://localhost:3001' }],
  },
  apis: ['./src/routes/*.js'], // Caminho correto
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const app = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nome_do_banco';

app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch(err => console.error('❌ Erro ao conectar ao MongoDB', err));

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
app.use('/posts', postagemRoute);

// Rota padrão
app.get('/', (req, res) => {
  res.send('API está funcionando corretamente! Acesse /api-docs para ver a documentação.');
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  });
}

module.exports = app;
