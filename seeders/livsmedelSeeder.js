//If CONNECTIONSTRING is not assigned
if (process.env.CONNECTIONSTRING == null) { process.env.CONNECTIONSTRING = 'mongodb://root:password@localhost:27017/livsmedel?authSource=admin'; }

const mongoose = require('mongoose');
const livsmedel = require("../models/livsmedelModel");

mongoose.connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection open!');
    })
    .catch((err) => {
        console.log(err);
    });

const seedLivsmedel = [
    {
        matvara: 'Socker',
        vikt: 100
    }];

const seedDB = async () => {
    await livsmedel.deleteMany({});
    await livsmedel.insertMany(seedLivsmedel);
};

seedDB().then(() => {
    mongoose.connection.close();
});