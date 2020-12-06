//var express=require('express');
var express=require('express');
var app=express();
require('dotenv').config();

let port=process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.end("Hello World");

});

app.get('/time',(req,res)=>{
    const date=new Date();
    res.send(date.toISOString());
})
app.listen(port);