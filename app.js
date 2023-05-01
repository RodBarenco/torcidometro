const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Rota para o arquivo HTML
  if (req.url === '/') {
    fs.readFile('./src/template.html', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }

  // Rota para o arquivo JSON
  if (req.url === '/list.json') {
    fs.readFile('./src/data/list.json', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
      }
    });
  }

  // Rota para o arquivo CSS
  if (req.url === '/stylesheet.css') {
    fs.readFile('./src/stylesheet.css', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      }
    });
  }

  // Rota para o arquivo JavaScript
  if (req.url === '/main.js') {
    fs.readFile('./src/main.js', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(data);
      }
    });
  }

  // Rota para arquivos de imagem
  if (req.url.startsWith('/assets/')) {
    const filename = req.url.slice(8); // remove "/assets/" from the URL
    fs.readFile(`./src/assets/${decodeURI(filename)}`, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(data);
      }
    });
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

