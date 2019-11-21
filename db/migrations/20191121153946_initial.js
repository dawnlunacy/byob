exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('artists', function(table) 
    {
      table.increments('id').primary();
      table.string('id_artist');
      table.string('artist_name');
      table.string('album_genre');
      table.string('website');
      table.string('biography');

      table.timestamps(true, true);
    }),

      knex.schema.createTable('albums', 
      function(table) {
        table.increments('id').primary();
        table.string('id_artist');
        table.string('album_name');
        table.integer('year_released').unsigned();
        table.string('album_artist');
        table.string('album_genre');
        table.foreign('id_artist')
          .references('artists.id_artist');

        table.timestamps(true, true);

    })
  ])
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('albums'),
    knex.schema.dropTable('artists')
  ]);
};
