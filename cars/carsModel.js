const db = require("../dbConfig");

module.exports = {
  get,
  getById,
  insert
};

function get() {
  return db("carTable");
}

function getById(id) {
  return db("carTable")
    .where("id", "=", id)
    .first();
}

function insert(newCar) {
  return db("carTable")
    .insert(newCar)
    .then(([id]) => getById(id));
}
