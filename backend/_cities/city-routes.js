const router = require('express').Router();
const { cityController } = require('./city-controller');

router.route('/')
  .get(cityController)
  .post(cityController);
router.route('/:id')
  .get(cityController)
  .post(cityController);

module.exports = router;