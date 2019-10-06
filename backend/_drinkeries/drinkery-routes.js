const router = require('express').Router();
const { drinkeryController } = require('./drinkery-controller');

router.route('/')
  .get(drinkeryController)
  .post(drinkeryController);
router.route('/:drinkeryId')
  .get(drinkeryController)
  .post(drinkeryController);

module.exports = router;