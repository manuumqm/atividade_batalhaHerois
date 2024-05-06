const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 4000;

app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'superherois',
  password: 'ds564',
  port: 7007
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Está funcionado!')
});


app.get('/herois', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM herois');
      res.json({
        total: result.rowCount,
        herois: result.rows,
      });
    } catch (error) {
      console.error('Erro ao obter herois:', error);
      res.status(500).send('Erro ao obter herois');
    }
  });

  app.post('/bruxos', async (req, res) => {
    try {
      const { nome, poder, nivel, hp} = req.body;
  
  
      await pool.query('INSERT INTO herois (nome, poder, nivel, hp) VALUES ($1, $2, $3, $4)', [nome, poder, nivel, hp]);
      res.status(201).send({ mensagem: 'Heroi adicionado com sucesso' });
  
    } catch (error) {
      console.error('Erro ao adicionar heroi:', error);
      res.status(500).send('Erro ao adicionar heroi');
    }
  });