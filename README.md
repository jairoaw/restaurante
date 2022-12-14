# Video
https://www.youtube.com/watch?v=j17dl9DzMn8

# Roteiro de instalação e execução

# Backend (contem o código do servidor node.js)

criar a pasta do projeto "restaurante";

entrar na pasta restaurante;

criar a pasta backend;

entrar na pasta backend;

iniciar o projeto: 
~~~javascript
npm init -y;
~~~

instalar mongoose, express e cors: 
~~~javascript
npm i express mongoose cors
~~~

instalar nodemon em modo global: 
~~~javascript
npm i -g nodemon
~~~
adicionar "ES6 Module Syntax" no arquivo package.json: "type": "module",

criar o index.js que contem as informações dos pacotes e da conexao com o banco mongodb;

## Criação das rotas

criar a pasta routes;

entrar na pasta routes;

criar o arquivo CardapioRoute.js

## Criação do model

"O Schema permite definir os campos armazenados em cada documento, junto com seus requisitos de  validação e valores padrão"

criar a pasta models;

entrar na pasta models;

criar o arquivo CardapioModel.js

## Criação do controller

"Um Controller irá coordenar as ações referentes à esse Model."

criar a pasta controllers;

entrar na pasta controllers;

criar o arquivo CardapioController.js

iniciar o servidor na porta 5000: entrar na pasta backend (onde está o index.js) e executar no terminal: 
~~~ javascript
nodemon index
~~~

Se estiver rodando, aparecerá no terminal: 
_"Exemplo de aplicativo ouvindo a porta 5000"
"conectado no banco..."_

#################################################################

# Frontend

entrar na pasta restaurante;

criar a pasta frontend

entrar na pasta frontend

criar o projeto: 
~~~ javascript
npx create-react-app frontend
~~~

instalar dependencias: 
~~~ javascript
npm i react-router-dom axios bulma
~~~
(bulma css)

iniciar o projeto: (irá abrir o navegador na porta default 3000)
~~~ javascript
npm start
~~~

## Criação dos componentes

criar a pasta src/components;

entrar na pasta src/components;

criar o arquivo AddCardapio.js (adicionar cardápios);

criar o arquivo ListCardapio.js (listar cardápios);

criar o arquivo EditCardapio.js (editar cardápios);

configurar App.js em frontend/src com as rotas para HOME, ADD e EDIT

## Testes

adicionar, editar, listar e deletar está funcionando (se a conexão com o mongodb atlas estiver ok);

Botão "Home" vai pra tela inicial;

Botão "Adicionar novo" abre um formulário para cadastrar;

Botão "Editar" abre um formulário para editar;
