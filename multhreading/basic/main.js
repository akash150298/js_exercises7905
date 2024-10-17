const { fork } = require('child_process');
const child = fork('child.js');

// Send a message to the child process
child.send({ hello: 'world' });

// Listen for messages from the child process
child.on('message', (message) => {
  console.log('Message from child:', message);
});

//  child.js is a different file that will be running
