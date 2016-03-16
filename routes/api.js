var fs      = require('fs');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res, next) {
    res.render('feed', { items: JSON.parse(data), layout: false });
});

router.get('/appearance/:uuid', function(req, res, next) {
    res.render('appearance', { title: item.title, item: item , products: products, layout: false});
});

router.get('/product/:uuid', function(req, res, next) {
    sendFile('product/'+req.params.uuid+'.json', res);
});

// Reads and sends file contents
function sendFile(filename, res) {
    res.type('json');
    var file = fs.readFile('resources/'+filename, 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            res.json({'status': 404, 'message': 'resource with name: '+filename+' not found'});
        } else {
            res.send(data);
        }
    });
}

module.exports = router;