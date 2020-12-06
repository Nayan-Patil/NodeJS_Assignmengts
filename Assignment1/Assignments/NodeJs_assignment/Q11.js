const fs=require('fs');

fs.readFile('content.txt','utf8',function(err,data){
    if(err) console.log(err);
    console.log(data);
})