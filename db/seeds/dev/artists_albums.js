
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

// 1. Load the JSON data from each data file
// 2. Create a knex seed (and export it)
// 3. Delete any existing data in all of the tables
// 4. Seed all of the merchants first because we need the primary key to exist as a foreign key for each product
// 5. Seed each product
//   - Create an empty array where each promise will go
//   - Find the merchant 'id' for the current product being inserted
//   - Insert the product with the merchant 'id' as the foreign key
// 6. Resolve all of the product's promises


// const artistsData = require('../../../artistsData');
// const albumsData = require('../../../albumsData');

// exports.seed = function(knex, Promise) {
//   return knex('artists').del()
//   .then(() => {
//     return knex('albums').del();
//   })
//   .then(() => {
//     return knex('artists').insert(artistsData);
//   })
//   .then(() => {
//     let albumPromises = [];
//     albumsData.forEach((albumCollection) => {
//       albumCollection.forEach((album) => {
//         let artist = album.albumArtist;
//         albumPromises.push(createAlbum(knex, album, artist))
//       })
//     });
    
//     return Promise.all(albumPromises);
//   });
// };

// const createAlbum = (knex, album, artist) => {
//   console.log("album", album)
//   console.log("artist", artist)
//   return knex('artists').where('artistName', artist).first()
//   .then((artistAlbums) => {
//     return knex('albumsData').insert({
//       idArtist: album.idArtist,
//       albumName: album.albumName,
//       yearReleased: album.yearReleased,
//       albumArtist: album.albumArtist,
//       albumGenre: album.albumGenre,
//       artist_id: artistAlbums.idArtist
//     });
//   });
// };


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