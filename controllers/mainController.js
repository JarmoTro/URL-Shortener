const URL = require('../models/URL');
const utils = require('../utils')

exports.getHomePage =  (req, res) => {
    res.render('index');
};

exports.redirectUser = async (req,res) => {
    const shortURL = await URL.findOne({shortURL: req.params.shortUrl});
    if(shortURL == null){
        res.render('404');
    }
    else{
        res.redirect(shortURL.fullURL);
    }  
};

exports.createShortURL = async (req, res) => {
    if(utils.isAValidUrl(req.body.inputURL)){
        const URL_obj = new URL({fullURL: req.body.inputURL, shortURL: utils.makeShortURLString()});
        await URL_obj.save();
        const shortURL = req.get('host')+"/"+URL_obj.shortURL
        const fullURL = URL_obj.fullURL;
        res.render('shortenedURL', {shortURL: shortURL, fullURL: fullURL});
    }
    else{
        res.render('invalidURL');
    }
}