const express = require('express');
const index = require('./server/controllers/index');

const app = express();
const port = 3000;

app.get('/', index.show);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
