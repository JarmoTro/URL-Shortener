const mainController = require('../controllers/mainController');
const express = require('express');
const router = express.Router();

router.get('/', mainController.getHomePage);
router.get('/:shortUrl', mainController.redirectUser)


router.post('/shorten', mainController.createShortURL)

module.exports = router;