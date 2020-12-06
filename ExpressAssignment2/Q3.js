var express=require('express');
var app=express();

app.get('/',function(req,res){
  res.send("goto home url: /home");
});

app.get('/home',function(req,res){
  res.send("Hello World!!");
});

app.listen(process.argv[2]);
