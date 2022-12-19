const repo = require('./repository');

const getsenales = async (req, res) => {
  try {
    const data = await repo.getsenales();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
  }
};

module.exports = { getsenales };
