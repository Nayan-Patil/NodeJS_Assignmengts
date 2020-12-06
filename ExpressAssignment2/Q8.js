var express=require('express');

var app=express();

app.set('view engine','pug');

app.set('views','./templates');
app.get('/home',(req,res)=>{
    res.render('index',{date: new Date().toDateString()});

});

app.listen(3000);




