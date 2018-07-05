var request = require('request');

function fetchdata(datas) {
    console.log("datas"+datas);
    
    return new Promise(function (resolve, reject) {

        console.log("datas in promise"+datas);
        request(`https://jsonplaceholder.typicode.com/posts?userId=${datas}`, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            
            console.log('body:', body); // Print the HTML for the Google homepage.


            if (error) {    
                //throw err;
                console.log(error);

                reject(error);
            } else {
                resolve(body);
                //console.log(rows);
            }

        });
    });
}



module.exports = {
    fetchdata
};