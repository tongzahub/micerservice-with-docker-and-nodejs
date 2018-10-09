'use strict';

const express = require('express');
const function1 = require('./microserviceB-controller')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Microservice B\n');
});
app.get('/function1',function1.function1)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);