// exports.seed = function(knex) {
  // Deletes ALL existing entries
//   return knex('albums').del()
//     .then(() => knex('artists').del())
//     .then(function () {
//       return Promise.all([
//         // Inserts seed entries


//         // knex('artists').insert({id: 1, colName: 'rowValue1'}),
//         // knex('table_name').insert({id: 2, colName: 'rowValue2'}),
//         // knex('table_name').insert({id: 3, colName: 'rowValue3'})
//       ]);
//     });
// };


const artistsData = require('../artistsData');
const albumsData = require('../albumsData');

const createArtist = (knex, artist) => {
  return knex('artists')
    .insert(
      {
        idArtist:artist.idArtist,
        artistName: artist.artistName,
        albumGenre: artist.albumGenre,
        website: artist.website
      }
    )
}