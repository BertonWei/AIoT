//載入HTTP模組
var http = require("http");

//創建HTTP伺服器並監聽8000 port
http.createServer (function(request,response){
  //Set the respones HTTP hearder with HTTP status and Content
  response.writeHead(200,{'Content-Type':'Text/plain'});
  
  // Send the response body "Hello World"
  response.end('Hello World\n');
  
}).listen(8000);

//print Url for accessing server
console.log('Server running at http://127.0.0.1:8000')