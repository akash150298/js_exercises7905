require('dotenv').config()
const express = require('express');
const app = express();
const data = {
    "login": "akash150298",
    "id": 109782459,
    "node_id": "U_kgDOBosluw",
    "avatar_url": "https://avatars.githubusercontent.com/u/109782459?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/akash150298",
    "html_url": "https://github.com/akash150298",
    "followers_url": "https://api.github.com/users/akash150298/followers",
    "following_url": "https://api.github.com/users/akash150298/following{/other_user}",
    "gists_url": "https://api.github.com/users/akash150298/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/akash150298/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/akash150298/subscriptions",
    "organizations_url": "https://api.github.com/users/akash150298/orgs",
    "repos_url": "https://api.github.com/users/akash150298/repos",
    "events_url": "https://api.github.com/users/akash150298/events{/privacy}",
    "received_events_url": "https://api.github.com/users/akash150298/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Akash Samant",
    "company": "Mindtree",
    "blog": "",
    "location": "bengaluru",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-07-22T05:17:01Z",
    "updated_at": "2024-10-01T17:22:52Z"
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

