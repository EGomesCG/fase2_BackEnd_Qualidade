# fase2_BackEnd_Qualidade

Este projeto foi desenvolvido para auxiliar professores da rede pública a postar e gerenciar aulas de maneira eficiente e centralizada. Utilizamos tecnologias modernas e boas práticas de desenvolvimento para garantir um sistema robusto e escalável.

---

## 🚀 Tecnologias e Ferramentas Utilizadas

- **Node.js** (v18+)
- **Express.js** - Framework web para Node.js
- **MongoDB** - Banco de dados NoSQL orientado a documentos
- **Mongoose** - ODM para modelagem de dados no MongoDB
- **Docker & Docker Compose** - Contênirizacao do ambiente de desenvolvimento e produção
- **Swagger UI (OpenAPI)** - Documentação interativa da API
- **Mocha + Chai + Supertest** - Ferramentas para testes unitários e de integração
- **Nodemon** - Monitoramento de alterações no código durante o desenvolvimento
- **dotenv** - Gerenciamento de variáveis de ambiente
- **GitHub Actions** - Pipeline de CI/CD automatizado

---

## 📂 Arquitetura do Projeto

```plaintext
fase2_BackEnd_Qualidade/
├── .github/
│   └── workflows/
│       └── ci.yaml             # Configuração do CI/CD com GitHub Actions
├── src/
│   ├── controllers/
│   │   └── postController.js   # Lógica de controle das rotas de posts
│   └── models/
│   │   └── post.js             # Definição do modelo de dados para posts
│   ├── routes/
│   │   └── postRoutes.js       # Definição das rotas da API
│   └── swagger.js              # Configuração do Swagger para documentação da API
├── tests/
│   └── math.test.js            # Testes unitários para funções matemáticas
│   └── post.test.js            # Testes das rotas de posts
├── .env.example                # Exemplo de arquivo de variáveis de ambiente
├── .gitignore                  # Arquivos e pastas ignorados pelo Git
├── changelog.md                # Histórico de alterações do projeto
├── docker-compose.yaml         # Configuração do Docker Compose
├── Dockerfile                  # Dockerfile para criação da imagem da aplicação
├── package.json                # Dependências e scripts do projeto
├── README.md                   # Documentação do projeto
└── index.js                    # Ponto de entrada principal da aplicação
```

---

## 📌 Como Instalar e Executar o Projeto Localmente

### Pré-requisitos

- **Node.js** (v18 ou superior)
- **Docker** e **Docker Compose**
- **Git**

### Passos para Configuração

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/EGomesCG/fase2_BackEnd_Qualidade.git
   cd fase2_BackEnd_Qualidade
   ```

2. **Configurar Variáveis de Ambiente**

   Copie o arquivo de exemplo `.env.example` para `.env` e ajuste as variáveis conforme necessário:

   ```bash
   cp .env.example .env
   ```

3. **Instalar Dependências**

   ```bash
   npm install
   ```

4. **Iniciar o Ambiente com Docker**

   Utilize o Docker Compose para subir o ambiente, incluindo o MongoDB:

   ```bash
   docker-compose up -d
   ```

5. **Iniciar o Servidor**

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em:  
   📍 `http://localhost:3001`

---

## 🌐 Documentação Interativa da API (Swagger)

Após iniciar a aplicação, acesse:

📍 **`http://localhost:3001/api-docs`**

Nesta interface, você poderá explorar e testar todos os endpoints da API de forma interativa.

---

## 🧲 Executando os Testes

O projeto inclui testes unitários e de integração para garantir a qualidade do código.

Para executar os testes:

```bash
npm test
```

Para gerar um relatório de cobertura de testes:

```bash
npm run coverage
```

---

## 🔄 Pipeline de CI/CD

Utilizamos o **GitHub Actions** para automação de integração contínua e deploy.

O fluxo consiste em:

1. **Branches Monitoradas**: `main` e `develop`
2. **Jobs Executados**:
   - Instalação de dependências
   - Execução de testes
   - Deploy automatizado (para a branch `main`)

O arquivo de configuração está localizado em `.github/workflows/ci.yaml`.

---

## 🐋 Utilização do Docker

A aplicação e o banco de dados MongoDB são contênirizados para facilitar a implantação e o desenvolvimento.

Para iniciar os contêners:

```bash
docker-compose up -d --build
```

Para encerrar os contêners:

```bash
docker-compose down
```

---

## 🔖 Endpoints Disponíveis

| Método | Rota                  | Descrição                             |
|--------|-----------------------|---------------------------------------|
| GET    | `/posts`              | Lista todos os posts                  |
| GET    | `/posts/:id`          | Obtém um post específico pelo ID      |
| POST   | `/posts`              | Cria um novo post                     |
| PUT    | `/posts/:id`          | Atualiza um post existente pelo ID    |
| DELETE | `/posts/:id`          | Remove um post pelo ID                |
| GET    | `/posts/search/term`  | Pesquisa posts por termo específico   |
| GET    | `/api-docs`           | Acessa a documentação Swagger         |

---

## 📃 Variáveis de Ambiente (.env)

Exemplo de configuração:

```env
SERVER=localhost
PORT=3001
DATABASE=mydatabase
MONGODB_URI=mongodb://root:example@mongodb:27017/mydatabase?authSource=admin
SECRET_KEY=supersecretkey
```

---

## 💡 Como Contribuir

1. **Fork** o projeto.
2. Crie uma **branch** para sua feature:

   ```bash
   git checkout -b feature/minha-feature
   ```

3. **Commit** suas alterações:

   ```bash
   git commit -m 'Adiciona nova feature'
   ```

4. Faça o **push** para a branch:

   ```bash
   git push origin feature/minha-feature
   ```

5. Abra um **Pull Request**.

---

## 📜 Histórico de Versões

Consulte o arquivo [CHANGELOG.md](./changelog.md) para detalhes sobre as alterações realizadas.

---

## ✨ Considerações Finais

Este projeto foi desenvolvido com foco em boas práticas de desenvolvimento, incluindo documentação completa, testes automatizados e integração contínua. Esperamos que este sistema auxilie professores na gestão eficiente de suas aulas e conteúdos.
