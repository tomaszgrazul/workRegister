const Company = require('../models/CompanyListModel');


module.exports = {
  
    add: (req, res) => {
           
        let newCompany = new Company(req.body);
        
        newCompany
        .save()
        .then(() => {
            res.json(newCompany);
        })
        .catch((err) => {
            return res.json({ error: 'Get company error' });
        });   
    },

    del: (req, res) => {

        Company
        .findByIdAndDelete(req.body.id)
        .then(()=>{
            res.json({ delete: true});
        })
        .catch((err) => {
            res.json({ error: 'Delete company error' });
        });
    },

    read: (req, res) => {

        Company
        // .findById(req.body.id)
        .find(req.body)
        .lean()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json({ error: 'Read company error' });
        }); 
    }
};