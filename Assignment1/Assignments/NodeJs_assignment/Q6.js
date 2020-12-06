var division=require('./operations/division');
var sum=require('./operations/sum');
var multiplication=require('./operations/multiplication');
var substraction=require('./operations/substraction');
var moment=require('moment');
let now=moment();
console.log("Today is "+now.format("dddd, MMMM Do YYYY,  HH:mm:ss a"));
console.log(sum.sum(12,6));
console.log(multiplication.multiplication(12,6));
console.log(substraction.substraction(12,6));
console.log(division.division(12,6))