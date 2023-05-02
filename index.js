import express from 'express';
import { Router } from 'express';
import fs from 'fs';

const app = express();
const router = Router();

router.get('/', (req, res) => {
  fs.readFile('./src/template.html', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).type('html').send(data);
    }
  });
});

router.get('/list.json', (req, res) => {
  fs.readFile('./src/data/list.json', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).type('json').send(data);
    }
  });
});

router.get('/main.js', (req, res) => {
  fs.readFile('./src/main.js', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).type('js').send(data);
    }
  });
});

router.get('/stylesheet.css', (req, res) => {
  fs.readFile('./src/stylesheet.css', (err, data) => {
    if (err) {
      res.status(500).send('Erro interno do servidor');
    } else {
      res.status(200).type('css').send(data);
    }
  });
});

router.get('/assets/:filename', (req, res) => {
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

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
