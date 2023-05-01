import express from 'express';
import fs from 'fs';

const app = express();

app.get('/', (req, res) => {
  fs.readFile('./src/template.html', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).type('html').send(data);
    }
  });
});

app.get('/list.json', (req, res) => {
  fs.readFile('./src/data/list.json', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).type('json').send(data);
    }
  });
});

app.get('/main.js', (req, res) => {
  fs.readFile('./src/main.js', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).type('js').send(data);
    }
  });
});

app.get('/stylesheet.css', (req, res) => {
  fs.readFile('./src/stylesheet.css', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).type('css').send(data);
    }
  });
});

app.get('/assets/:filename', (req, res) => {
  const filename = req.params.filename;
  fs.readFile(`./src/assets/${decodeURI(filename)}`, (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      const extension = filename.split('.').pop();
      res.status(200).type(extension).send(data);
    }
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});


