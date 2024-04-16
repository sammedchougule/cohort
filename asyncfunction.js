console.log("Hi"); // this runs first

let fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data); // this goes to find the file and takes time to read then givs output
    //so it runs third
});

setTimeout(function() {
    console.log('hi once again')
}, 5000) //this runs last becoz setTimeout is 5 Sec


let a = 0;
for (let i = 0; i<10; i++){
    a = a + i;
}
console.log(a); // do the itiration and runs the secod

setTimeout(function() {
    console.log('hi again')
}, 2500) //this runs fourth becoz it waits for 2.5 Sec
