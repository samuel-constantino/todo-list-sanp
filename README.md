  

<h1 align="center">Gerenciador de Tarefas [Back-End] 👋</h1>

  

<p>

<img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />

<a href="https://github.com/samuel-constantino/task-manager-back-end#readme" target="_blank">

<img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />

</a>

<a href="https://github.com/samuel-constantino/task-manager-back-end/graphs/commit-activity" target="_blank">

<img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />

</a>

</p>

  
  

> **API Restful** para gerenciamento de tarefas utilizando **arquitetura MSC** desenvolvida em **Node.js** e **Express** com operações de leitura, escrita, alteração e remoção (**CRUD**) de listas de tarefas salvas no banco de dados **MongoDB Atlas** com autenticação de usuários por **Json Web Token** para acesso às rotas protegidas, **Testes unitários** e documentação OpenAPI com **Swagger**.


## Sumário

  

- [Instruções](#instruções)

- [Documentação](#documentação)

- [Uso em Núvem](#uso-em-núvem)

- [Uso Local](#uso-local)

- [Versão Node](#versão-node)

- [Bando de Dados](#banco-de-dados)

- [Respostas](#respostas)

- [Tecnologias](#tecnologias)

- [Próximos Passos](#próximos-passos)

- [Autor](#autor)

- [Suporte](#suporte)

- [Licença](#-licença)

  

## Instruções

### Instalação Local

Clone o repositório

```

git clone https://github.com/samuel-constantino/todo-list-sanp.git

```

Entre na pasta do repositório:

  
```

cd todo-list-sanp

```

  

Instale as dependências:

  

```

npm install

```

  

Renomeie arquivo de configurações de ambiente

```

mv .env.example .env

```

  

Ative servidor do MongoDB
obs: caso não tenha o mongodb instalado, siga as instruções desse [link](https://www.mongodb.com/docs/manual/installation/)

```

sudo service mongod start

```

  Teste a aplicação

```

npm run test

```

Rode a aplicação

  

```

npm start

```

  

## Documentação

  

### Uso em Núvem

  

Esta API está disponível na nuvem por meio desse [link](https://todo-list-bk-0209.herokuapp.com/swagger/)

  

### Uso local

Com a aplicação rodando, acesse o seguinte URL
```

http://localhost:4000/swagger

```

![Swagger Routes](https://github.com/samuel-constantino/task-manager-back-end/blob/main/src/images/rotas-swagger.png)

### Versão Node
```

v16.14.0

```

### Banco de Dados

Para os requisitos e necessidades dessa aplicação foi escolhido o bando de dados [MongoDB](https://www.mongodb.com/pt-br), pois sendo um bando de dados não-relacional (NoSQL) aplica-se perfeitamente o conceito de schema com chave e valor, otimizando operações de entrada e saída de dados.


### Respostas

  
  

| Código | Descrição |

|---|---|

| `200` | Requisição executada com sucesso (Success).|

| `201` | Registro criado com sucesso (Created).|

| `400` | Dados da requisição mal formados (Bad request).|

| `401` | Usuário não autorizado (Unauthorized).|

| `404` | Registro pesquisado não encontrado (Not found).|

  

### Tecnologias

  

- ESLint

- Express

- Swagger UI Express

- Json Web Token

- Md5

- Joi

- MongoDB

- MongoDB Memory Server

- Mocha

- Chai

- Sinon

- NYC

  

### Próximos Passos

  

- Aumentar a cobertura de testes

- Implementar interface gráfica com React

  

### Autor

  

👤 **Samuel Constantino <samuelicapuidados@gmail.com>**

  

* Website: https://www.linkedin.com/in/samuel-constantino/

  

* Github: [@samuel-constantino](https://github.com/samuel-constantino)

  

## Suporte

  

Deixe uma ⭐️ se este projeto te ajudou!

  

## 📝 Licença

  

Copyright © 2022 [Samuel Constantino <samuelicapuidados@gmail.com>](https://github.com/samuel-constantino).<br />

  

Este projeto é licenciado pela [ISC](https://github.com/samuel-constantino/task-manager-back-end/blob/master/LICENSE) .

  

***

  

Foi usado o seguinte Template para esse Readme: [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_