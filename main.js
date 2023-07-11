const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const Company = require('./api/models/CompanyListModel');
var cors = require('cors');


mongoose.connect('mongodb://127.0.0.1:27017/WorkRegister');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());



const companyRouter = require('./api/routes/companyRoutes');
app.use('/', companyRouter);


app.listen(8080, function() {
    console.log('Serwer WorkRegister działa');
});