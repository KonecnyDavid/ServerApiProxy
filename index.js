var proxy = require('express-http-proxy');
const express = require('express');
const app = express();
const port = 3000;

app.use('/blablabot', proxy('localhost:3004'));
app.use('/apartment', proxy('localhost:3111'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));