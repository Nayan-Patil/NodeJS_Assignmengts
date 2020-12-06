var express=require('express');

var bodyParser=require('body-parser');
//const { urlencoded } = require('body-parser');

var app=express();

var urlencodedParser=bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');
app.set('views','./views')
app.use(bodyParser.urlencoded({extended:false}));
 app.get('/form',(req,res)=>{
    res.render('form');
});

app.post('/form', (req,res)=>{
    console.log(req.body);
    var str1=req.body.str;
    var reverse=str1.split('').reverse().join('');
    console.log("Reverse is "+reverse)
});
app.listen(3000);
