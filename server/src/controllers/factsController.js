const axios = require('axios');
const Fact = require('../models/Fact');

exports.getFacts = ('/', (req, res) => {
  res.json(
    {'msg':'MERN Stack'}
  )
});

exports.randomFact = ('/randomFact', (req, res, next) => {
  axios.get('https://uselessfacts.jsph.pl/random.json')
  .then(async ({data}) => {
    const count = await Fact.countDocuments() + 1
    const newFact = await Fact.create({
      id:count,
      text:data.text,
      source:data.source,
      sourceURL:data.source_url
    })
    res.status(200).json({newFact})
  })
  .catch(err => console.log(err))
})