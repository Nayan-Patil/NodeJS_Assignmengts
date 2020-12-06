var express=require('express');
var bodyParser=require('body-parser');
const jsonParser=bodyParser.json();
var router=express.Router();
const Inventory=require('../models/inventory');

router.get('/inventory',function(req,res){
    
    res.send(req.body);
    console.log(req.body);
});
router.get('/inventory/:name',function(req,res){
    var name=req.params.name;
   /* Inventory.findOne(name).then(reult =>{
        res.send(req.body.name);
   }); */
    
    //res.send(req.body);
    
});

router.post('/inventory',jsonParser,function(req,res){
    Inventory.create(req.body).then(function(inventory){
        res.send(inventory);
        
    });
    });

router.put('/inventory/:id',function(req,res){
    console.log("PUT");
    res.send({type: 'PUT'});
});

router.delete('/inventory/:name',function(req,res){
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
    */
});



module.exports=router;
