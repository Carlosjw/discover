# Instalando o EJS

`npm install ejs`

## Instalando o express para criação de um servidor

`npm install express`

* Obs: Necessários para que o navegador reconheça o EJS

## Criar arquivo `server.js`

Importar o express dentro do arquivo `server.js` com o código:
`const express = require('express');`

Isso vai fazer com que o express crie um servidor que irá renderizar todos os nossos códigos `.ejs` no navegador.

## Observações:
    * Alterações feitas em arquivos `.ejs` com o servidor rodando não necessitam de reinicialização do mesmo, mas alterações feitas em arquivos `.js` necessitam que o servidor seja reiniciado para que as alterações seja carregadas.
