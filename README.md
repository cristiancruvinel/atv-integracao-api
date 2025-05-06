# atv-integracao-api

Projeto de integração de API usando Node.js, TypeScript, TypeORM e JWT seguindo Clean Architecture.

## ✅ Funcionalidades
- Cadastro de usuários com senha criptografada
- Autenticação via JWT
- Cadastro de contatos associados ao usuário autenticado
- Rotas protegidas por middleware JWT
- Validação de payloads com DTO e class-validator
- Listagem de usuários com seus contatos
- Listagem de contatos com seus usuários

## 🚀 Como rodar o projeto

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
npm start
```

> O banco de dados será recriado automaticamente com TypeORM (`synchronize: true`).

## 📮 Testes com Postman

Importe a collection Postman disponível em:
```
postman/atv-integracao-api.postman_collection.json
```

Use os endpoints:
- `POST /usuarios`
- `POST /login`
- `POST /contatos` (com token)
- `GET /usuarios` (com token)
- `GET /contatos` (com token)

## 🧱 Estrutura de pastas (Clean Architecture)

- `domain/`: entidades e DTOs
- `interfaces/`: rotas, controllers e middlewares
- `infrastructure/`: banco de dados e configs
- `application/`: (pode crescer com casos de uso)
- `config/`: configurações diversas