var fs=require('fs');
var myReadStream=fs.createReadStream(__dirname+'/Q2_read.txt','utf8');
myReadStream.on('data',function(chunk){
    console.log(chunk);
});