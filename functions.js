var Nightmare = require('nightmare');
var nightmare = [];
module.exports = functions = {
    start(id) {
        nightmare[id] = Nightmare({
            show: false
        });
    },
    browse(id, url) {
        nightmare[id]
            .goto(url)
            .evaluate(function() {
                return document.title;
            })
            .then(function(result) {
                console.log(result);
            })
            .catch(function(error) {
                console.error(error);
            });
    },
    end(id) {
        nightmare[id].end().then(function(result) {
            console.log('Closed ' + id)
        })
    }
}
