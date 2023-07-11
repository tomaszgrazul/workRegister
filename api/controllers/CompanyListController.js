const Company = require('../models/CompanyListModel');


module.exports = {
  
    create: (req, res) => {
           
        let newCompany = new Company(req.body);
        
        newCompany
        .save()
        .then(() => {
            res.json({ save: true });
        })
        .catch((err) => {
            return res.json({ error: 'Get company error' });
        });   
    },

    delete: (req, res) => {

        Company
        // .findByIdAndDelete(req.body.id) //dla post
        .findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete company error' });
        });
    },

    index: (req, res) => {

        Company
        // .find(req.body)
        .find(req.params)
        .lean()
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ error: 'Read company error' });
        }); 
    },

    readCount: (req, res) => {

        Company
        .count()
        .then(count => {
            res.json(count);
            // console.log("liczba dokumentów serwer", count);
        })
        .catch((err) => {
            res.json({ error: 'Read count error' });
        }); 
    }

};