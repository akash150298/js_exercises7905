require('dotenv').config()
const express = require('express');
const app = express();
const data = {
    "login": "akash150298",
    "id": 109782459,
    "node_id": "U_kgDOBosluw",
    "avatar_url": "https://avatars.githubusercontent.com/u/109782459?v=4",
    "gravatar_id": "",
  }

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/data', (req, res)=> {
    res.json(data)
})
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

