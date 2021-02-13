console.log("Created file system object");

var fs=require('fs');

console.log("Reading file");


// Way 1 using anonymous function
// fs.readFile('Dem.txt','utf8',function(err,data){ //Calling read asyncronously
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Got file object "+data); 
// });



// Way 2 using callback function expression
var c=function(err,data){ 
    if (err) {
        return console.log(err);
    }
    console.log("Got file object "+data); 
};
fs.readFile('Dem.txt','utf8',c); //Calling read asyncronously




// // Way 3 using callback function declaration
// function callback(err,data){ 
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Got file object "+data); 
// };
// fs.readFile('Dem.txt','utf8',callback); //Calling read asyncronously





// var data=fs.readFileSync('Dem.txt','utf8'); //Calling read syncronously
// console.log("Got file object "+data); 
