const mongoose = require('mongoose');
const cartItemSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  productName: String,
  price: Number,
  quantity: Number
});
module.exports = mongoose.model('CartItem', cartItemSchema);
