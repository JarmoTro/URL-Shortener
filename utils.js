const URL = require("url").URL;

module.exports = {
    isAValidUrl: function(s){
        try {
            new URL(s);
            return true;
          } catch (err) {
            return false;
          }
    }
}
