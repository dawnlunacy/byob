
exports.up = function(knex) {
  return knex.schema.table('artists', function(table) {
    table.dropColumn('biography');
  })
};

exports.down = function(knex) {
  return knex.schema.table('artists', function(table) {
    table.string('biography');
  })
};
