const mongoose = require('./models.js')
const Charity = mongoose.model('Charity')
const charityData = require ('./charity-data.json')

Charity.remove({})
.then(()=> {
    Charity.collection.insert(charityData)
    .then((charities)=> {
        console.log(charities)
        process.exit()
    })
    .catch((err)=> {
        console.log(err)
    })
})