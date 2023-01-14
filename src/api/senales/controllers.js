const repo = require('./repository');

const getsenales = async (req, res) => {
  try {
    const {cod}= req.params;
    const data = await repo.getsenales(cod);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
  }
};

const gettodo = async (req, res) => {
  try {
    const data = await repo.gettodo();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
  }
};
module.exports = { getsenales,gettodo };
