const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    CustomerID : Number,
    FullName : String,
    Address : String
},{
    versionKey:false
})

module.exports = mongoose.model('Customer', CustomerSchema)