const mongoose = require('mongoose');
const {Schema} = mongoose

const FactSchema = new Schema ({
  _id:{
    type:String,
    required:true
  },
  text:String,
  source:String,
  sourceURL:String
},{
  timestamps:true
});

module.exports = mongoose.model('Fact', FactSchema);