var fs = require('fs')
var concat = require('concat-stream')
var arr = concat(function(data) {
  console.log(data);
});

//reading contents from file and writing it to concat method
arr.write(fs.readFileSync('Q9.txt','utf-8').split(" "));
console.log(arr);
arr.end();