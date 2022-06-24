const URL = require('../models/URL');
const utils = require('../utils')

exports.getHomePage =  (req, res) => {
    res.render('index');
};

exports.get404Page = (req, res) => {
    res.render('404')
}

exports.redirectUser = async (req,res) => {
    const shortURL = await URL.findOne({shortURL: req.params.shortUrl});
    if(shortURL != null){
        res.redirect(shortURL.fullURL);
    }
    else{
        this.get404Page;
    }  
};

exports.createShortURL = async (req, res) => {
    if(utils.isAValidUrl(req.body.inputURL)){
        while(true){
            var shortURLString = utils.makeShortURLString();
            const dbQuery = await URL.findOne({shortURL: shortURLString});
            if(dbQuery == null){
                const URL_obj = new URL({fullURL: req.body.inputURL, shortURL: shortURLString});
                await URL_obj.save();
                const fullShortURL = req.get('host')+"/"+URL_obj.shortURL
                res.render('shortenedURL', {shortURL: fullShortURL, fullURL: URL_obj.fullURL});
                break;
            }
        }
    }
    else{
        res.render('invalidURL');
    }
}