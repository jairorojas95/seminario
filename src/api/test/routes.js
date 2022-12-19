const router = require('express').Router();
const controllertest = require('./controllers');

router.get('/', controllertest.getsenales);

module.exports = router;
