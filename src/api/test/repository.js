const knex = require('../../database');

const getsenales = () => {
  return knex.select().from('senales');
};

module.exports = {
  getsenales
};
