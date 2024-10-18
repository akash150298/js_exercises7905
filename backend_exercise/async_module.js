const async = require('async');

// Create a queue with a concurrency of 2
const q = async.queue((task, callback) => {
    console.log('Processing task:', task.name);
    setTimeout(() => {
        console.log('Completed task:', task.name);
        callback();
    }, 1000);
}, 2);

// Add tasks to the queue
q.push({name: 'task1'});
q.push({name: 'task2'});
q.push({name: 'task3'});

// Assign a drain event handler
q.drain(() => {
    console.log('All tasks have been processed');
});
