var fs=require('fs');

fs.writeFile('Q10_write.txt',"hey ho! let's go", 'utf8',function(err){
    if(err) console.log(err);
    console.log("The file was saved");
    
});

fs.readFile('Q10_write.txt','utf8',function(err,data){
    console.log(data);
    string=data;
  
    search=string.split(" ");
  
    fs.writeFile(search[0],'Hey ho! Lets go!!!',(err)=>{
      if (err) throw err;
  
    });
  });