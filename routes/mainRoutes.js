const mainController = require('../controllers/mainController');
const express = require('express');
const router = express.Router();

router.post('/shorten', mainController.createShortURL)

router.get('/', mainController.getHomePage);

router.get('/:shortUrl', mainController.redirectUser)

router.get('*', mainController.get404Page)

module.exports = router;