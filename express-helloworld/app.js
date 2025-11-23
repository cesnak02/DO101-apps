var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", function () {
  console.log(`App listening on port ${port}`);
});

