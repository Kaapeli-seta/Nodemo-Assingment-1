// index.js

import http from 'http';
import {getItmes, postItmes} from './items.js';
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/items' && req.method === 'GET') {
    getItmes(res);
  } else if (req.url === '/items' && req.method === 'POST') {
    postItmes(req, res);
  } else if (req.method === 'DELETE') {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Can not delete data');
  } else if (req.method === 'PUT') {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Can not modify data');
  } else {
    res.writeHead(404, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({error: '404', message: 'Method not available'}));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
