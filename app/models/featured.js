var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//create a schema
var featuredSchema = new Schema({
  name: String,
  image_path: String
});

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('featured_movies', featuredSchema);
