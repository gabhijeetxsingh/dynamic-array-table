var request = require('request');
var cd = '';
let b = [];

function fetchdata() {

    return new Promise(function (resolve, reject) {

        // let arr = [1,2,3,4,5]
        // let promises = arr.map(i=>{
        //     return reqagain(i)
        // })

        let arr = []
        while (arr.length < 100) {
            var randomnumber = Math.floor(Math.random() * 100) + 10;
            
            arr[arr.length] = randomnumber;
        }
       


        if (!resolve) {
            reject("error aai baaba");
        } else {
            // console.log("#############-------------" + JSON.stringify(arr) + "---------------##############");
            resolve(arr);
        }




    });
}



module.exports = {
    fetchdata
};