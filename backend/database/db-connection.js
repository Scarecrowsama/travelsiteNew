const mongoose  = require('mongoose');
const db        = mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
mongoose.set('debug', true);
module.exports = db;