var express = require('express');
var router = express.Router();
var listdata = require('../modal/list.js');

/* GET home page. */
let searchval;

router.get('/', function (req, res, next) {

  searchval = req.query.searchstring;
  listdata.fetchdata(searchval)
    .then(function (data) {
     
      //console.log(data);
      res.render('index', {
        title: 'Users',
        rows: data
      });

    })
    .catch(function (e) {
      console.log("Catch handler " + e)
    });



});
// router.get('*', function(req, res, next) {
//   res.render('pagenotfound', { title: 'Express' });
// });

module.exports = router;