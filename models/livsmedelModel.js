const mongoose = require('mongoose');
const conn = mongoose.connect(process.env.CONNECTIONSTRING);

const Livsmedel = mongoose.model('Livsmedel', { matvara: String, vikt: Number });

module.exports = Livsmedel;