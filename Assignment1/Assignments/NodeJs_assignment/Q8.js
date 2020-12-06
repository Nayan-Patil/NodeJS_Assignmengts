var fs=require('fs');
var myReadStreams=fs.createReadStream(__dirname+'/Q8.txt','utf8');
var arr=[];
var sum=0;
myReadStreams.on('data',function(chunk) {
    
    var str=chunk.toString();
    var strArr=str.split(",");
    
    for(var i=0;i<strArr.length;i++){
        if(!isNaN(strArr[i])){
            sum+=parseInt(strArr[i]);
        }
    }
    
    console.log("addition of integers: "+sum);
    
});

    
