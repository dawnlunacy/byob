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

app.get('/api/v1/albums/artist/:artistName', (request, response) => {
  const { artistName } = request.params;
  database('albums')
  .where({ album_artist : artistName })
  .then(album => {
    if(album.length === 0) {
      response.status(404)
      .json({error: ` Sorry could not find an albums related to ${artistName} . Please check your query and try again. If album information does not exist in our database, please feel free to make a contribution.` })
    }
    response.status(200).json(album)
  })

  .catch(error => {
    response.status(500).json({ error });
  });
});

app.post('/api/v1/artists', (request, response) => {
  const newArtist = request.body;

  for (let requiredParameter of ['idArtist', 'artistName', 'artistGenre', 'website', 'biography']) {
    if (!newArtist[requiredParameter]) {
      return response.status(422).json({
        error: `Expected format: { idArtist: <String>, artistName: <String>, artistGenre: <String>, website: <String>, biography: <String>. You are missing "${requiredParameter}" property.`
      });
    }
  }

  database('artists').insert(newArtist, 'id')
    .then(artist => {
      response.status(201).json({ id: artist[0] })
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
