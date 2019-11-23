
exports.up = function(knex) {
  return knex.schema.table('artists', function(table) {
    table.string('artist_genre');
  })
};

exports.down = function(knex) {
  return knex.schema.table('artists', function(table) {
    table.dropColumn('artist_name');
  })
};
