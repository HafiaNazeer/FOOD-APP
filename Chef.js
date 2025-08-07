const mongoose = require('mongoose');
const chefSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  rating: Number
});
module.exports = mongoose.model('Chef', chefSchema);
