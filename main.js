var http = require('http');
var static = require('node-static');
var file = new static.Server();
http.createServer (function (request, response) {
	console.log("request=="+request);
	console.log("response=="+response);
file.serve (request, response);
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello World!');
}).listen(8080, '192.168.1.32');
console.log('Server running at http://192.168.1.32:8080/');