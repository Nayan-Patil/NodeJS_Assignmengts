var express=require('express');
var app=express();

var bodyParser=require('body-parser');
const jsonParser=bodyParser.json();
const { request } = require('http');

var itemsList={
    add:function(name, price){
        var item={name: name, price: price};
        this.items.push(item);
        return item;
    }

};

var createArray=function(){
    var shoppingList=Object.create(itemsList);
    shoppingList.items=[];
    return shoppingList;
}

var arr=createArray();
arr.add('Mobile', 12000);

arr.add('Television', 20000);
arr.add('Washing Machine',15000);



app.get('/items',(req,res)=>{
    res.send(arr);
    console.log(arr)
});
app.post('/items/',jsonParser,function(req,res){
    
    var item=arr.add(req.body.name,req.body.price);
    res.status(200).json(item);
});




app.listen(3000);
