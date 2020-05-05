const express = require('express');

const app = express();

app.use(express.static('/public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/two', (request, response) => {
  response.sendFile(__dirname + '/indexTwo.html');
});

app.get('/three', (request, response) => {
    response.sendFile(__dirname + '/indexThree.html');
  });

app.get('*', (request, response) => {
  response.send("Error, page not found");
});

app.listen(3000);