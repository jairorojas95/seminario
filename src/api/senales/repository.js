const knex = require('../../database');

const getsenales = (cod) => {
  return knex.select('nombre','codigo','tipo','significado','multa').from('senales').where('codigo',cod );
};

module.exports = {
  getsenales
};
