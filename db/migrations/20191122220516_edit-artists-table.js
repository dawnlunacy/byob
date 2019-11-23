
exports.up = function(knex) {
  return knex.schema.table('artists', function(table) {
    return table
  })  
};

exports.down = function(knex) {
  return knex.schema.table('artists', function(table) {
    table.dropColumn('album_genre');
  })
};
