const mongoose = require('mongoose');

const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: {type: String, required: true},
  image: {type: String, required: true},
  price: {type: Number, required: true},
  inventory: {type: Number, required: true},
  description: {type: String, required: true},
  // One to many relationship
  manufacturer: {type: ObjectId, required: true, ref: 'Manufacturer'}
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: {type: String, required: true}
});

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = {Product, Manufacturer};