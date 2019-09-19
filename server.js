const compression = require('compression');
const express = require('express');
const path = require('path');

const app = express();

app.use(compression());
app.use(express.static(__dirname + '/dist/memija/'));

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname + '/dist/memija/index.html'));
});

app.listen(process.env.PORT || 8080);
