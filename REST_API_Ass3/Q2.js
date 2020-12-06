var express=require('express');
const connectDB=require('./models/connection');

connectDB();
const Inventory=require('./models/inventory');

var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.put('/inventory',(req,res)=>{
  Inventory.updateMany({},req.body).then(()=>{
    Inventory.find().then((inventories)=>{
      console.log(inventories);
      res.json(inventories);
    })
  })
});


app.put('/inventory/:name',(req,res)=>{
    Inventory.findOneAndUpdate({
        name:req.params.name
    },
    {
        $set:{name: req.params.name, quantity: req.query.quantity}
    },
    {upsert:true},
    function(err, updatedItem){
        if(err){
            console.log('error occured');
            console.log(err);
        }else{
            console.log(updatedItem);
            res.status(204);
            res.json(updatedItem);
            res.send("updated");
        }
    }
    );

});

app.listen(8081);