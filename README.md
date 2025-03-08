# API de Blogging com Node.js, Express e Docker

# fase2_BackEnd_Qualidade

Os professores da rede pública precisam postar as aulas e transmitir conhecimento...

## 🚀 Fluxo de Desenvolvimento

- **develop** → Branch de desenvolvimento onde novas funcionalidades e correções são testadas antes de serem enviadas para `main`.
- **main** → Branch principal usada para produção. Apenas código estável é mesclado para cá.

### 📌 Como contribuir?

1. Faça um fork do repositório e crie uma branch a partir de `develop`.
2. Desenvolva sua funcionalidade e envie um Pull Request para `develop`.
3. Após a revisão, sua contribuição poderá ser mesclada na `main` para produção

## Tecnologias Utilizadas

* **Node.js**: [https://nodejs.org/](https://nodejs.org/)
* **Express.js**: [https://expressjs.com/](https://expressjs.com/)
* **MongoDB**: [https://www.mongodb.com/](https://www.mongodb.com/) ou **PostgreSQL**: [https://www.postgresql.org/](https://www.postgresql.org/)
* **Mongoose**: [https://mongoosejs.com/](https://mongoosejs.com/) (se usar MongoDB) ou **Sequelize**: [https://sequelize.org/](https://sequelize.org/) (se usar PostgreSQL)
* **Docker**: [https://www.docker.com/](https://www.docker.com/)
* **GitHub Actions**: [https://github.com/features/actions](https://github.com/features/actions)
* **Jest**: [https://jestjs.io/](https://jestjs.io/) (para testes)
* **dotenv**: [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv) (para variáveis de ambiente)


## Começando

Instruções sobre como configurar o projeto localmente.

### Pré-requisitos

* Node.js e npm instalados
* Docker Desktop instalado
* MongoDB ou PostgreSQL instalado e configurado

Liste as dependências e requisitos necessários.

```bash
# Instalar as dependências

*Instalação*

# 1. Clone o repositório
git clone https://github.com/EGomesCG/fase2_BackEnd_Qualidade.git

# 2. Navegue até o diretório do projeto
cd fase2_BackEnd_Qualidade

# 3. Instale as dependências
npm install


# 4. Crie o arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:

    ```
    PORT=3000
    DATABASE_URL=mongodb://localhost:27017/blog (ou a URL do PostgreSQL)
    ```

## Execução da Aplicação

### Modo de Desenvolvimento

```bash
npm run dev

### Documentar Funções e Classes

Se o seu projeto contém funções ou classes complexas, considere adicionar documentação inline usando comentários. Por exemplo, em JavaScript:

```javascript
/**
 * Adiciona dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma de a e b.
 */
function add(a, b) {
    return a + b;
