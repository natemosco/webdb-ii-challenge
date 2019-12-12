exports.up = function(knex) {
  return knex.schema.createTable("carTable", function(table) {
    //primary key, called 'id', an integer
    table.increments();

    table.string("VIN", 128).notNullable();
    table.string("make", 128).notNullable();
    table.string("model", 128).notNullable();
    table.float("mileage", 128).notNullable();
    table.string("transmission", 128);
    table.string("titleStatus", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("carTable");
};
