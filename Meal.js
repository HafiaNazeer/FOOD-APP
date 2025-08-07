const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema({
  chefId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chef' },
  name: String,
  description: String,
  price: Number,
  available: Boolean,
  isFeatured: Boolean
});
module.exports = mongoose.model('Meal', mealSchema);
