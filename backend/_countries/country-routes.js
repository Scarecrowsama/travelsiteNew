const router = require('express').Router();
const { countryController } = require('./country-controller');

router.route('/')
  .get(countryController)
  .post(countryController);
router.route('/:id')
  .get(countryController)
  .post(countryController);

module.exports = router;