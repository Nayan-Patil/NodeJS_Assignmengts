var express=require('express');
const connectDB=require('./models/connection');

connectDB();
const Inventory=require('./models/inventory');

var bodyParser=require('body-parser');

var app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/inventory',async(req,res)=>{
   
    

    try{
        const{name, quantity}= req.body;
    let invent={};
    invent.name=name;
    invent.quantity=quantity;
    
    let inventModel= new Inventory(invent);
    await inventModel.save();

    res.json(inventModel);
    console.log(inventModel);
}
catch(err){
    console.log(err);
}
})

app.listen(8081);