# atv-integracao-api

Projeto de integração de API utilizando **Node.js**, **TypeScript**, **TypeORM** e **JWT**, seguindo os princípios da **Clean Architecture**.

## ✅ Funcionalidades

- Cadastro de usuários com senha criptografada (bcryptjs)
- Autenticação via JWT
- Cadastro de contatos associados ao usuário autenticado
- Middleware de autenticação para rotas protegidas
- Validação de payloads com DTOs (`class-validator` e `class-transformer`)
- Listagem de usuários com seus contatos
- Listagem de contatos com seus respectivos usuários

## 🚀 Como rodar o projeto

1. Clone o repositório e entre na pasta:

```bash
git clone https://github.com/cristiancruvinel/atv-integracao-api.git
cd atv-integracao-api
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

> O banco de dados SQLite será criado automaticamente.  
> O TypeORM está com `synchronize: true`, portanto as tabelas serão recriadas a cada execução.

---

## 📮 Testes com Postman

Importe a collection disponível em:

```
postman/ATV - INTEGRACAO - API.postman_collection.json
```

### Endpoints disponíveis:

#### 🔐 Autenticação
- `POST /usuarios` – Criar usuário
- `POST /login` – Gerar token JWT
- `GET /usuarios/protegida` – Rota protegida para teste de token

#### 👤 Usuários
- `GET /usuarios` – Listar usuários e seus contatos *(token obrigatório)*

#### ☎️ Contatos
- `POST /contatos` – Criar contato *(token obrigatório)*
- `GET /contatos` – Listar contatos e usuários *(token obrigatório)*

---

## 🧱 Estrutura de pastas (Clean Architecture)

```
src/
├── domain/
│   ├── entities/         # Entidades (User, Contact)
│   └── dtos/             # Data Transfer Objects (DTOs)
│
├── interfaces/
│   ├── controllers/      # Lógica de entrada (Request → Response)
│   ├── routes/           # Definição de rotas
│   └── middlewares/      # Middlewares (validação, autenticação)
│
├── infrastructure/
│   ├── database/         # Conexão, migrations e SQLite
│   └── auth/             # JWT config
│
├── application/          # Casos de uso (pode crescer)
├── config/               # Configurações auxiliares (env, etc)
└── index.ts              # Entry point da aplicação
```
