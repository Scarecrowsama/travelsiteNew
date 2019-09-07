const mongoose = require('mongoose');

const article = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { 
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true }
  },
  rating: { 
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 } 
  },
  tags: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, required: true },
      name: { type: String, required: true }
    }
  ],
  entityId: { type: mongoose.Schema.Types.ObjectId, required: true },
  entityTypeId: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { strict: true, timestamps: true });

module.exports = mongoose.model('Article', article);