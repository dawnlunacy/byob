const express = require('express');
const app = express();
var fs = require('fs');
const cors = require('cors');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(cors());
app.use(express.json());



app.set('port', process.env.PORT || 3000);
app.locals.title = 'Music'


app.get('/', (request, response) => {
  response.send('View artist and their albums')
})

app.get('/api/v1/artists', (request, response) => {
  database('artists')
  .select()
  .then(artists => {
    response.status(200).json(artists)
  })
  .catch(error => {
    response.status(500).json({ error });
  });
});

app.get('/api/v1/albums', (request, response) => {
  database('albums')
  .select()
  .then(albums => {
    response.status(200).json(albums)
  })
  .catch(error => {
    response.status(500).json({ error });
  });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
