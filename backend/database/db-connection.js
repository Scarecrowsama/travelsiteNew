const mongoose  = require('mongoose');
const db        = mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

module.exports = db;