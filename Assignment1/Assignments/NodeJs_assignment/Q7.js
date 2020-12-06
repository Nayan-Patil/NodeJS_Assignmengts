var strftime=require("strftime");

var time=strftime.localizeByIdentifier('it_IT');
console.log("local Hour of server "+time('%H:%M:%S'));
