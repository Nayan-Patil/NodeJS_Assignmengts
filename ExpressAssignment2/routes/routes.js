var express=require('express');
var router=express.Router();

router.get('/items',(req,res)=>{
    res.send({type:'GET'};)
});

router.post('/items',function(req,res){
    console.log(req.body);
    res.send({type: 'POST'});
});

router.patch('/items/:id',function(req,res){
    var name=req.params.name;
    var price=Number(req.body.price);
    req.update({'name':name},{'name':name});
    if(error) console.log(error);
    res.send('updated');
});

router.delete('/items/:id',function(req,res){
    console.log("DELETE");
    res.send({type: 'DELETE'});
});

module.exports=router;