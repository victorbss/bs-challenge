// TODO: Implement the web server here.

const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT,
  bubbleSort = require('./lib/sort.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send('API is running!');
});

app.post('/api/bubblesort', (req, res) => {
  const result = bubbleSort(req.body);
  res.send(result);
});

let server = app.listen(port, function() {
  console.log('API running on port:', server.address().port);
});
