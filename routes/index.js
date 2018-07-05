var express = require('express');
var router = express.Router();
var listdata = require('../modal/list.js');

/* GET home page. */
let searchval;

router.get('/', function (req, res, next) {

  searchval = req.query.searchstring;
  listdata.fetchdata(searchval)
    .then(function (data) {
      let fdata = data.filter(function (values) {
        console.log(values);
        if (values.body.includes(searchval) == true) {
          console.log("data aa raha hai" + values.body.includes(searchval));
          return values;
        }


      });
      console.log('##########################################################');
      console.log(fdata);
      res.render('index', {
        title: 'Users',
        rows: fdata
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