const mongoose = require('./connection.js')

const CharitySchema = new mongoose.schema ({
  org: String,
  mission: String,
  donateUrl: String,
  logoUrl: String
})

module.exports = mongoose.model('Charity', CharitySchema)