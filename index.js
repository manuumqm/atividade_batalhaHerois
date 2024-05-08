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

// rota para obter todos os herois 
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

  //rota para criar um heroi
  app.post('/herois', async (req, res) => {
    try {
      const { nome, poder, nivel, hp} = req.body;
  
  
      await pool.query('INSERT INTO herois (nome, poder, nivel, hp) VALUES ($1, $2, $3, $4)', [nome, poder, nivel, hp]);
      res.status(201).send({ mensagem: 'Heroi adicionado com sucesso' });
  
    } catch (error) {
      console.error('Erro ao adicionar heroi:', error);
      res.status(500).send('Erro ao adicionar heroi');
    }
  });

// rota para editar um heroi
app.put('/herois/:id', async (req, res) => {
  const id = req.params.id;
  const { nome, poder, nivel, hp } = req.body;
  const query = 'UPDATE herois SET nome=$1, poder=$2, nivel=$3, hp=$4 WHERE id=$5';
  const values = [nome, poder, nivel, hp, id];

  try {
    await pool.query(query, values);
    res.send('Heroi atualizado com sucesso');
  } catch (error) {
    console.error('Erro ao atualizar heroi:', error);
    res.status(500).send('Erro ao atualizar heroi');
  }
});

  // rota para deletar um heroi
  app.delete('/herois/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await pool.query('DELETE FROM herois WHERE id = $1', [id]);
      res.status(200).send({ mensagem: 'Heroi excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir Heroi:', error);
      res.status(500).send('Erro ao excluir heroi');
    }
  });

  // rota para obter todas as batalhas 
  app.get('/batalhas', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM batalhas');
      res.json({
        total: result.rowCount,
        batalhas: result.rows,
      });
    } catch (error) {
      console.error('Erro ao obter batalhas:', error);
      res.status(500).send('Erro ao obter batalhas');
    }
  });


  app.get('/herois/nivel/:nivel', async (req, res) => {
    const { nivel } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM herois WHERE nivel = $1', [nivel]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/herois/poder/:poder', async (req, res) => {
  const { poder } = req.params;
  try {
      const { rows } = await pool.query('SELECT * FROM herois WHERE poder = $1', [poder]);
      res.json(rows);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

  //rota para dois herois batalharem 
  app.get('/batalhas/:heroi1_id/:heroi2_id', async (req, res) => {
    try {
        const { heroi1_id, heroi2_id } = req.params;

        const resultado1 = await pool.query('SELECT * FROM herois WHERE id = $1', [heroi1_id]);
        const resultado2 = await pool.query('SELECT * FROM herois WHERE id = $1', [heroi2_id]);
        
        const heroi1 = resultado1.rows[0];
        const heroi2 = resultado2.rows[0];

        let vencedor_id = -1;

        if (heroi1.poder > heroi2.poder) {
            vencedor_id = heroi1.id;
        } else if (heroi2.poder > heroi1.poder) {
            vencedor_id = heroi2.id;
        }

        const query = 'INSERT INTO batalhas (heroi1_id, heroi2_id, vencedor_id) VALUES ($1, $2, $3) RETURNING id';
        const resultadoBatalha = await pool.query(query, [heroi1_id, heroi2_id, vencedor_id]);

        let informacoes;
        if(vencedor_id != -1){
            const resultado = await pool.query('SELECT * FROM herois WHERE id = $1', [vencedor_id]);
            informacoes = resultado.rows[0];
        }

        res.json({ vencedor: vencedor_id == -1 ? 'Empate' : vencedor_id, batalhas_id: resultadoBatalha.rows[0].id });
    } catch (error) {
        console.error('Erro ao tentarem Batalhar', error);
        res.status(500).json({ message: 'Erro ao tentarem Batalhar' });
    }
});


app.get('/batalhas/herois', async (req, res) => {
  try {
      const { rows } = await pool.query('SELECT batalhas.id, heroi1_id, heroi2_id, vencedor_id, herois.nome as vencedor_nome, herois.poder as vencedor_poder, herois.nivel as vencedor_nivel, herois.hp as vencedor_hp FROM batalhas INNER JOIN herois ON batalhas.vencedor_id = herois.id');
      res.json(rows);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


app.get('/', async (req, res) => {
  res.status(200).send({ mensagem: 'Servidor rodando com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
