//Simple http get client
var http = require("http");
var url = process.argv[2];

http.get(url,function callback(response){
	response.setEncoding("utf8");

	response.on("data",function(data){
	  console.log(data);
	})
	
	response.on("error",function(e){
	  console.log(error);
	})
});
