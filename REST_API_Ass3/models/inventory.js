const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const inventorySchema=new Schema({
    name:{
        type:String
        
    },
    quantity:{
        type:Number
    }
});

const Inventory=mongoose.model('inventory',inventorySchema);
module.exports=Inventory;