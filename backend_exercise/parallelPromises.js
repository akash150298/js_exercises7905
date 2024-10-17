function downloadContents(urls) {
    const promises = urls.map((url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => {
                if(!resonse.ok){
                    throw new Error(`Response status ${response.status}`)
                }
                return response.text()
           })
           .then(data => resolve(data))
           .catch(error => reject(error))
        })
    })
    return Promise.all(promises)
}

// Usage example:
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

downloadContents(urls)
  .then(contents => {
    console.log('Downloaded contents:', contents);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });

async function downloadContents(urls) {
  const promises = urls.map(async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.text();
      return data;
    } catch (error) {
      throw error;
    }
  });

  return Promise.all(promises);
}


