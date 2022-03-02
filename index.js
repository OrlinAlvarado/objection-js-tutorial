const express = require('express');
const dbSetup = require('./db/db-setup');
const router = require('./routes');
dbSetup();

const app = express();

app.use(express.json());

app.use(router);

app.listen(8080, () => console.log('server runing on port 8080'));
