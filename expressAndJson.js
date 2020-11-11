import express from 'express';
import { read } from './jsonFileStorage.js';

const app = express();

const PORT = 3004;

const whenIncomingRequest = (request, response) => {
  console.log('request came in');

  // read the JSON file
  read('data.json', (data) => {
    // send back data in the response
    console.log('done with reading');
    response.send(data);
  });
};

app.get('/', whenIncomingRequest);

app.listen(PORT);
