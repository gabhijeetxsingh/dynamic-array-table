var request = require('request');
var cd = '';
let b = [];

function fetchdata() {

    return new Promise(function (resolve, reject) {

        // let arr = [1,2,3,4,5]
        // let promises = arr.map(i=>{
        //     return reqagain(i)
        // })
        let promises = [];
        let finaldata = [];
        for (var i = 1; i <= 5; i++) {

            promises.push(reqagain(i))
        }

        Promise.all(promises)
            .then(result => {
                //  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"+JSON.stringify(result)+"%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");  
                //finaldata.push[result];
                for (var i = 0; i < 5; i++) {

                    finaldata.push(result);
                }
                console.log('-------------' + JSON.stringify(finaldata[0]) + '-----------------');
                resolve(finaldata[1]);



            }).catch(err => {
                console.log(err);
            })





    });
}

function reqagain(i) {


    return new Promise(function (resolve, reject) {


        request(`https://jsonplaceholder.typicode.com/posts?userId=${i}`, function (error, response, body) {
            let arr = JSON.parse(body);



            if (error) {
                reject(error);
            } else {
                // console.log("#############-------------" + JSON.stringify(arr) + "---------------##############");
                resolve(arr);
            }

        });

    });




}


module.exports = {
    fetchdata
};