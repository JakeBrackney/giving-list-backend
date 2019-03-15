const mongoose = require('./connection.js')

const CharitySchema = new mongoose.Schema ({
  org: String,
  category: String,
  mission: String,
  donateUrl: String,
  logoUrl: String
})

module.exports = mongoose.model('Charity', CharitySchema)