const db = require("../dbConfig");

module.exports = {
  get,
  getById,
  insert
};

function get() {
  return db("cars");
}

function getById(id) {
  return db("cars")
    .where("id", "=", id)
    .first();
}

function insert(newCar) {
  return db("cars")
    .insert(newCar)
    .then(([id]) => getById(id));
}
