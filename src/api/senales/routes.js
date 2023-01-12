const router = require('express').Router();
const controllersenales= require('./controllers');

router.get('/:cod', controllersenales.getsenales);

module.exports = router;
