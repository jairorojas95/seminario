const router = require('express').Router();
const controllersenales= require('./controllers');

router.get('/:cod', controllersenales.getsenales);
router.get('/', controllersenales.gettodo);

module.exports = router;
