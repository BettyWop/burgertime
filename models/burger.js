var omr = require('../config/orm');

var burger = {
    Burger : function(callback){
        omr.all('burger', function(result){
            callback(result)
        });
    },
    create : function(newburger, callback){
        omr.create('burger', newburger, function(result){
            callback(result);
        });
    },
    update : function(id, callback){
        omr.update('burger', 'devour', "true" , "id", id, function(result){
            callback(result);
        });
    }
}

module.exports = burger;