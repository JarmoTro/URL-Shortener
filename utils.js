const URL = require("url").URL;

module.exports = {
    isAValidUrl: function(s){
        try {
            new URL(s);
            return true;
          } catch (err) {
            return false;
          }
    },

    makeShortURLString: function(){
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( var i = 0; i < 6; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * characters.length));
           }
           return result;
    }
}
