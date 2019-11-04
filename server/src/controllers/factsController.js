const axios = require('axios');
const Fact = require('../models/Fact');

exports.randomFact = ('/randomFact', async (req, res, next) => {
  await axios.get('https://uselessfacts.jsph.pl/random.json')
  .then(async ({data}) => {
    const newFact = await Fact.create({
      _id:data.id,
      text:data.text,
      source:data.source,
      sourceURL:data.source_url
    })
    .then(newFact => {
      res.status(200).json({newFact})
    })
    .catch(err => console.log(err))
  })
  .catch(err => console.log(err))
})