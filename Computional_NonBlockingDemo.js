var childP= require('child_process'); //Getting child process object


console.log(1);

var newProcess = childP.spawn( //run as sperate thread
    'node', //Node command to run node js
    ['fibonacci'], //List of file to be run in background
    {
        stdio: 'inherit'//By default the ouput wilol shown in different console to see on same console we use this options 
    } 
);

console.log(2);