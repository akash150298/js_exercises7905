const { fork } = require('child_process');
const numCPUs = require('os').cpus().length;

for (let i = 0; i < numCPUs; i++) {
  fork('worker.js', [8000 + i]); // Assign different ports to each child process
}

