const router = require('express').Router();
const { regionController } = require('./region-controller');

router.route('/')
  .get(regionController)
  .post(regionController);
router.route('/:id')
  .get(regionController)
  .post(regionController);

module.exports = router;