const async = require('async');
const axios = require('axios');

// Create a queue with a concurrency of 3
const q = async.queue(async (task, callback) => {
    try {
        const response = await axios.get(task.url);
        console.log(`Fetched data from ${task.url}`);
        // Process the response data here
    } catch (error) {
        console.error(`Error fetching data from ${task.url}:`, error);
    }
    callback();
}, 3);

// List of URLs to scrape
const urls = [
    'https://example.com/page1',
    'https://example.com/page2',
    'https://example.com/page3',
    'https://example.com/page4',
    'https://example.com/page5'
];

// Add tasks to the queue
urls.forEach(url => {
    q.push({ url });
});

// Assign a drain event handler
q.drain(() => {
    console.log('All URLs have been processed');
});
