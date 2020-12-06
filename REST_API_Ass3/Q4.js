var express=require('express');
const connectDB=require('./models/connection');

connectDB();
const Inventory=require('./models/inventory');

var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.delete('/inventory',(req,res)=>{
    Inventory.deleteMany({}).then(()=>{
      Inventory.find().then((inventories)=>{
        console.log(inventories);
        res.json(inventories);
      })
    })
  });
  
  //delete name
  app.delete('/inventory/:name',(req,res)=>{
    Inventory.deleteOne({name:req.params.name}).then(()=>{
      Inventory.find({}).then((inventories)=>{
        console.log(inventories);
        res.json(inventories);
      })
    })
  });
 app.listen(8081);