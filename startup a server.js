var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200,{'Content-type': 'text/html'});
	res.end('<h1>Hello World! My name is Amy Walker!</h1>');
}).listen(8080);

//console.log('Hello World');