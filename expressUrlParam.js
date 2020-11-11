import express from 'express';

const app = express();

const PORT = 3004;

const whenIncomingRequest = (request, response) => {
  console.log('request came in', request.params);

  response.send('yay');
};

app.get('/location/:city/:zip', whenIncomingRequest);

app.listen(PORT);
