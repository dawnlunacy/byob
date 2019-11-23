const artistsData = require('../../../artistsData');
const albumsData = require('../../../albumsData');

const createArtist = (knex, artist) => {
  return knex('artists').insert({
    id_artist: artist.idArtist,
    artist_name: artist.artistName,
    artist_genre: artist.artistGenre,
    website: artist.website,
    biography: artist.biography
  }, 'id_artist')
  .then(idArtist => {
    let albumsPromise = [];
    albumsData.filter(album => album.idArtist === idArtist[0])
      .forEach(album => {
      let albumInfo = {
        id_artist: album.idArtist,
        album_name: album.albumName,
        year_released: album.yearReleased,
        album_artist: album.albumArtist,
        album_genre: album.albumGenre
      }
      albumsPromise.push(createAlbum(knex, albumInfo))
    })
    return Promise.all(albumsPromise)
  });
};

const createAlbum = (knex, album) => {
  return knex('albums').insert(album)
};


exports.seed = function(knex) {
  return knex('albums').del()
  .then(() => knex('artists').del())
  .then(() => {
    let artistPromises = [];
    artistsData.forEach(artist => {
      artistPromises.push(createArtist(knex, artist));
    });
    return Promise.all(artistPromises);
  })
  .then(() =>  console.log('Seeding complete!'))
  .catch(error => console.log(`Error seeding data: ${error}`));

};