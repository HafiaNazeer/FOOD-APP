const mongoose = require('mongoose');
const bannerSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  link: String
});
module.exports = mongoose.model('Banner', bannerSchema);
