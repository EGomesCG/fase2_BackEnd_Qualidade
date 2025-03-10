# Usar uma imagem base do Node.js
FROM node:20

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar apenas package.json e package-lock.json antes para otimizar cache
COPY package*.json ./

# Instalar as dependências usando npm ci
RUN npm ci

# Copiar o restante da aplicação
COPY . .

# Expor a porta 3000
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]  # Ajuste para o comando de produção, se necessário