 # Batalha de Herois 🎯

![Banner](/assets/banner.gif)

## Introdução

O Projeto de Gerenciamento de Heróis é uma aplicação de backend desenvolvida para oferecer funcionalidades de CRUD (Create, Read, Update, Delete) relacionadas a heróis. Ele permite a criação, atualização, exclusão e recuperação de informações sobre heróis, bem como funcionalidades adicionais, como batalhas entre heróis e registro de histórico de batalhas.

## Funcionalidades

- Criação, leitura, atualização e exclusão (CRUD) de heróis.
- Realização de batalhas entre heróis.
- Registro e consulta de histórico de batalhas.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL

## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências do projeto usando `npm install`.
3. Configure o banco de dados PostgreSQL com o nome `superherois` e execute o script `script.sql` para criar as tabelas necessárias.
4. Abra o arquivo `index.js` e ajuste as configurações do banco de dados conforme necessário (usuário, senha, host, porta).
5. Inicie o servidor executando `npm run dev`.
6. Acesse as diferentes rotas disponíveis conforme a documentação fornecida.

## Documentação e teste de rotas
**Testando as Rotas no Insomnia:**

Para testar cada rota individualmente, siga estas instruções:

1. Rota para obter todos os heróis

- Método: GET
- URL: `http://localhost:4000/herois`

2. Rota para adicionar um novo herói

- Método: POST
- URL: `http://localhost:4000/herois`
- Corpo da Requisição (JSON):
  {
      "nome": "Nome do Herói",
      "poder": "Poder do Herói",
      "nivel": 1,
      "hp": 100
  }

3. Rota para atualizar um herói

- Método: PUT
- URL: `http://localhost:4000/herois/{id}`
  - Substitua `{id}` pelo ID do herói que deseja atualizar.
- Corpo da Requisição (JSON):
  {
      "nome": "Novo Nome do Herói",
      "poder": "Novo Poder do Herói",
      "nivel": 2,
      "hp": 150
  }

4. Rota para deletar um herói

- Método: DELETE
- URL: `http://localhost:4000/herois/{id}`
  - Substitua `{id}` pelo ID do herói que deseja deletar.

5. Rota para obter um herói específico

- Método: GET
- URL: `http://localhost:4000/herois/{id}`
  - Substitua `{id}` pelo ID do herói que deseja recuperar.

6. Rota para obter todos os heróis de um determinado nível

- Método: GET
- URL: `http://localhost:4000/herois/nivel/{nivel}`
  - Substitua `{nivel}` pelo nível desejado.

7. Rota para obter todos os heróis com um determinado poder

- Método: GET
- URL: `http://localhost:4000/herois/poder/{poder}`
  - Substitua `{poder}` pelo poder desejado.

8. Rota para realizar uma batalha entre dois heróis

- Método: GET
- URL: `http://localhost:4000/batalhas/{heroi1_id}/{heroi2_id}`
  - Substitua `{heroi1_id}` e `{heroi2_id}` pelos IDs dos heróis que deseja colocar para batalhar.

9. Rota para obter o histórico de batalhas

- Método: GET
- URL: `http://localhost:4000/batalhas`