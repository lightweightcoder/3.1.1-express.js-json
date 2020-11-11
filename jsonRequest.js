import express from 'express';
import { read } from './jsonFileStorage.js';

const app = express();

const PORT = 3004;

const whenIncomingRequest = (request, response) => {
  console.log('request came in');

  // read the JSON file
  read('data.json', (data, error) => {
    if (error) {
      console.log(`error reading file${error}`);
    } else {
      // send back data in the response
      console.log('done with reading');

      // we specified this at app.get
      const { index } = request.params;

      // send back the single name we asked for
      response.send(data.names[index]);
    }
  });
};

// get one of the things in the data array
app.get('/names/:index', whenIncomingRequest);

app.listen(PORT);
