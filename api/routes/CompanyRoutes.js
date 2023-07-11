const express = require('express');
const router = express.Router();
const companyListController = require('../controllers/companyListController');


router.post('/create', companyListController.create);

// router.post('/delete/', companyListController.delete);
router.delete('/delete/:id', companyListController.delete);

// router.post('/index', companyListController.index);
router.get('/index', companyListController.index);

// router.post('/readCount', companyListController.readCount);
router.get('/readCount', companyListController.readCount);

module.exports = router;