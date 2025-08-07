const mongoose = require('mongoose');
const trackingSchema = new mongoose.Schema({
  orderId: String,
  status: String,
  location: String,
  lastUpdated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Tracking', trackingSchema);
