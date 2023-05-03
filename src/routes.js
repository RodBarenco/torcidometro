import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

router.get('/', (req, res) => {
  const file = path.join(process.cwd(), 'src', 'template.html');
  try {
    const data = fs.readFileSync(file, 'utf8');
    res.status(200).type('html').send(data);
  } catch (err) {
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/list.json', (req, res) => {
  const file = path.join(process.cwd(), 'src', 'data', 'list.json');
  try {
    const data = fs.readFileSync(file, 'utf8');
    res.status(200).type('json').send(data);
  } catch (err) {
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/main.js', (req, res) => {
  const file = path.join(process.cwd(), 'src', 'main.js');
  try {
    const data = fs.readFileSync(file, 'utf8');
    res.status(200).type('js').send(data);
  } catch (err) {
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/stylesheet.css', (req, res) => {
  const file = path.join(process.cwd(), 'src', 'stylesheet.css');
  try {
    const data = fs.readFileSync(file, 'utf8');
    res.status(200).type('css').send(data);
  } catch (err) {
    res.status(500).send('Erro interno do servidor');
  }
});

router.get('/assets/:filename', (req, res) => {
  const filename = req.params.filename;
  const file = path.join(process.cwd(), 'src', 'assets', decodeURI(filename));
  try {
    const data = fs.readFileSync(file);
    const extension = filename.split('.').pop();
    res.status(200).type(extension).send(data);
  } catch (err) {
    res.status(500).send('Erro interno do servidor');
  }
});

export default router;
