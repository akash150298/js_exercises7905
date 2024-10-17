const { fork } = require('child_process');
const express = require('express');
const app = express();

app.get('/process-data', (req, res) => {
  // Fork a new child process to handle data processing
  const child = fork('dataProcessor.js');

  // Send a message to the child process to start processing
  child.send({ task: 'processData', data: 'largeDataset' });

  // Listen for messages from the child process
  child.on('message', (message) => {
    if (message.status === 'done') {
      res.send('Data processing completed!');
    }
  });

  // Handle child process errors
  child.on('error', (error) => {
    console.error('Child process error:', error);
    res.status(500).send('Data processing failed!');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// dataprocessor.js listening to event

process.on('message', (message) => {
  if (message.task === 'processData') {
    // Simulate data processing
    console.log('Processing data:', message.data);

    // Perform the data processing task (e.g., parsing, transforming)
    // For demonstration, we'll just use a timeout to simulate a long task
    setTimeout(() => {
      // Send a message back to the parent process when done
      process.send({ status: 'done' });
    }, 5000); // Simulate a 5-second processing time
  }
});

