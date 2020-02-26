var proxy = require('express-http-proxy');
const express = require('express');
const app = express();
const port = 3999;

app.use('/apartment', proxy('localhost:3111'));

app.get('/', (req, res) => res.send('davidkonecny.eu api index page'));

app.listen(port, () => console.log(`Proxy server listening on ${port}!`));