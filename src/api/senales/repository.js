const knex = require('../../database');

const getsenales = (cod) => {
  return knex.select('nombre','codigo','tipo','significado','multa')
  .from('senales').where('codigo',cod );
};

const gettodo = (cod) => {
  return knex.select('nombre','codigo','tipo','significado','multa')
  .from('senales');
};


module.exports = {
  getsenales,gettodo
};
