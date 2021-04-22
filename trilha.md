## Aula 1

- [x] iniciando o projeto
  - [x] criando arquivo package.json -> `yarn init -y`
  - [x] instalando express -> `yarn add express`
  - [x] types express -> `yarn add @types/express -D`
  - [x] instalando typescript -> `yarn add typescript -D`
  - [x] criando arquivo de conf. typescript -> `yarn tsc --init`
  - [x] intalando tradutor para o node -> `yarn add ts-node-dev -D`
  
## Aula 2

- [x] iniciando com bando de dados
  - [x] - instalar o typeorm `yarn add typeorm`
  - [x] - instalar o reflect-metadata `yarn add reflect-metadata`
  - [x] - instalar o SQlite `yarn add sqlite3`
  - [x] - criar o arquivo de config. do orm
  - [x] - criar a migration `yarn typeorm migration:create -n CreateSettings`
  - [x] - exec as migrations -> `yarn typeorm migration:run`
  - [x] - criar a entidade Settings
  - [x] - instalar a lib. e types "uuid"  `yarn add uuid` an `yarn add @types/uuid -D`
  - [x] - criar as entities
  - [x] - criar o repositorio
  - [x] - criar as rotas
    - [x] - Tipos de parametros
    - [x] - Routes Params -> Parametros de rotas
    - [x] - Query Params -> Filtros e buscas
    - [x] - Body Params

## Aula 3

- [x] - refatorando o controller settings (directory-> services)
- [x] - criar a tabela de user `yarn typeorm migration:create -n CreateUsers`
- [x] - criar a entity User
- [x] - criar repository User
- [x] - criar services User
- [x] - criar controller User
- [x] - rotas User
- [x] - criar a tabela de user `yarn typeorm migration:create -n CreateMessages`
- [x] - criar a entity Messages
- [x] - criar repository Messages
- [x] - criar services Messages
- [x] - criar controller Messages
- [x] - rotas Messages
- [x] - criar list de messages users

## Aula 4

- [x] - instalar a lib socket.io `yarn add socket.io`
- [x] - instalar os types `yarn add @types/socket.io -D`
- [x] - criando em server.ts um server ws
- [x] - instalar o `yarn add ejs`
- [x] - instalar o `yarn add socket.io-client`
- [x] - criar tabela de conections


## Feature Extra Tests

- [x] intalando as ferrramentas de teste
    - [x] `yarn add jest @types/jest -D`
    - [x] criar arquivo de configuração do jest `yarn jest --init`
    - [x] `yarn add ts-jest -D` -> preset, para trab. com TS
    - [x] liberar em jest config -> `preset: "ts-jest"` 
    - [x] bail -> true em config.jest
- [x] criar o primeiro teste
- [x] instalando ferramenta auxiliar para (mocha datas) dados fakes
    - [x] `yarn add supertest @types/supertest -D`
    - [x] criando a arquivo app.ts para ficar disponivel tbm para ao test
- [x] criando um banco de dados fake
    - [x] configurar o arquivo index.ts do diretorio database, para identificar
    atraves da linha de comando quando o banco ira atuar como test ou não
    - [x] no package.json em scripts `"test": NODE_ENV=test`, cria variavel de
    ambiente
    - [x] criando o `const defaultOptions = await getConnectionOptions()`, onde teremos todas as informaçoes contidas no ormconfig.json 