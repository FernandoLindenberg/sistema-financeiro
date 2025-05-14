const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('db.sqlite');

app.use(express.json());
app.use(express.static('public'));

db.run(`CREATE TABLE IF NOT EXISTS transacoes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tipo TEXT,
  descricao TEXT,
  valor REAL
)`);

app.get('/api/transacoes', (req, res) => {
  db.all('SELECT * FROM transacoes', [], (err, rows) => {
    if (err) return res.status(500).send(err);
    res.json(rows);
  });
});

app.post('/api/transacoes', (req, res) => {
  const { tipo, descricao, valor } = req.body;
  db.run('INSERT INTO transacoes (tipo, descricao, valor) VALUES (?, ?, ?)',
    [tipo, descricao, valor], function(err) {
      if (err) return res.status(500).send(err);
      res.json({ id: this.lastID });
    });
});

app.delete('/api/transacoes/:id', (req, res) => {
  db.run('DELETE FROM transacoes WHERE id = ?', [req.params.id], function(err) {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));