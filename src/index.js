const express = require('express');
const app = express();

const newmanApi = require('./Routes/newman.js');
const { config } = require('./config/index');

app.use(express.json());


app.all('/', function(req, res, next) {

    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
      );

    next();

});

// routes
newmanApi(app);

app.listen(config.port || 3000, function() {
    console.log(`Listening http://localhost:${config.port}`);
  });