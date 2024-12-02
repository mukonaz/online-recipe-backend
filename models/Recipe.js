const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  category: { type: String, required: true },
  prepTime: { type: String, required: true }, 
  cookTime: { type: String, required: true }, 
  servings: { type: String, required: true }, 
  picture: { type: String, required: false }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recipe', recipeSchema);
