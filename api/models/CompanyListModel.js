const mongoose = require('mongoose');

const Company = new mongoose.Schema({
    _id: String,
    companyName: String
}, {
    timestamps: true
})
 
module.exports = mongoose.model('Company', Company)