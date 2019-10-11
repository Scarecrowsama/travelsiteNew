const router = require('express').Router();
const { itineraryController } = require('./itinerary-controller');

router.route('/')
  .get(itineraryController)
  .post(itineraryController);
router.route('/:itineraryId')
  .get(itineraryController)
  .post(itineraryController);

module.exports = router;