console.log("1: Start app");

var wait=setTimeout(function(){
    console.log("2: In func") //Running code in seperate Thread i.e asyncronously
},3000);

console.log("3: End app");