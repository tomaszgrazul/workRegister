const express = require('express');
const router = express.Router();
const CompanyListController = require('../controllers/CompanyListController');


router.post('/add', CompanyListController.add);

router.post('/del', CompanyListController.del);

router.post('/read', CompanyListController.read);

module.exports = router;