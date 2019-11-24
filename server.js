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

app.get('/api/v1/artists/:artistName', (request, response) => {
  const { artistName } = request.params;
  database('artists')
  .where({ artist_name : artistName})
  .then(artist => {
    if(artist.length === 0) {
      response.status(404)
      .json({error: ` Sorry could not find an artist with a name of ${artist} . Please check your query and try again. If artist does not exist in our database, please feel free to make a contribution.` })
    }
    response.status(200).json(artist[0])
  })
  .then(artists => {
    response.status(200).json(artists)
  })
  .catch(error => {
    response.status(500).json({ error });
  });
});

app.get('/api/v1/albums/:albumName', (request, response) => {
  const { albumName } = request.params;
  database('albums')
  .where({ album_name : albumName})
  .then(album => {
    if(album.length === 0) {
      response.status(404)
      .json({error: ` Sorry could not find an album with a name of ${album} . Please check your query and try again. If album information does not exist in our database, please feel free to make a contribution.` })
    }
    response.status(200).json(album[0])
  })
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
