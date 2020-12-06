var fs=require('fs');
var myWriteStream=fs.createWriteStream(__dirname+'/Q4write.txt');
myWriteStream.write("hey ho! let's go");