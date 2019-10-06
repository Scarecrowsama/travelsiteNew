const router = require('express').Router();
const { eateryController } = require('./eatery-controller');

router.route('/')
  .get(eateryController)
  .post(eateryController);
router.route('/:eateryId')
  .get(eateryController)
  .post(eateryController);

module.exports = router;