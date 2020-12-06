var express=require('express');
const connectDB=require('./models/connection');

connectDB();
const Inventory=require('./models/inventory');

var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/inventory',function(req,res){
    Inventory.find().then((inventories)=>{
        console.log(inventories);
        res.json(inventories)
      }).catch((err)=>{
        if(err){
          throw err;
        }
      })
});
app.get('/inventory/:name',function(req,res){
    
   Inventory.findOne({name:req.params.name},(err,data)=>{
       if(err) throw err;
       res.json(data);
   })
   }); 
    
    //res.send(req.body);
    



/*

app.put('/inventory/:id',function(req,res){
    
});

app.delete('/inventory/:name',function(req,res){
   let name=req.params.name;
   let index=Inventory.findIndex((inventory)=>{
       return(inventory.name==name)
   })
   if(index>=0){    
       let item=Inventory[index];
       Inventory.splice(index,1);
       res.json(item);
   }
   else{
       res.status(404);
   }
   
    /*const name=req.params.name;

    const success= Inventory.delete(name);
    
    res.send(req.body);
    if(success){
        res.status(204).end();
        
    }
    else{
        res.status(404).end();
    }
    */
    /*console.log(req.params.name);
    Inventory.findByNameAndRemove({_name:req.params.name}).then(function(inventory){
    res.send(inventory);

});
*/
app.listen(8081);


