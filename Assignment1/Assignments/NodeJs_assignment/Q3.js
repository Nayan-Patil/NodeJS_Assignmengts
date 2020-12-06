
const fs=require('fs');

fs.readdir('./operations',(err,items)=>{
    items.forEach((item)=>{
        console.log(item);
    });
});