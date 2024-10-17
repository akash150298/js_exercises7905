
const { fork } = require('child_process');
const http = require('http');

const numCPUs = require('os').cpus().length;

for (let i = 0; i < numCPUs; i++) {
  fork('worker.js');
}

// worker.js
const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello, world!');
}).listen(8000);
