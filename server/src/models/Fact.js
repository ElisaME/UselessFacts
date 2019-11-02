const mongoose = require('mongoose');
const {Schema} = mongoose

const FactSchema = new Schema ({
  id:String,
  text:String,
  source:String,
  sourceURL:String
},{
  timestamps:true
});

module.exports = mongoose.model('Fact', FactSchema);