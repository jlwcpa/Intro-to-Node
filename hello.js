var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
	var q = url.parse(req.url,true);
	var fileName = "." + q.pathname;
	console.log(fileName);
	if (fileName == "./") {fileName = './index';}
	
	fileName = fileName + ".html";
	
	console.log(fileName);
	fs.readFile(fileName , function(err, data) {
		if (err) {
			res.writeHead(404,{'Content-type': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200,{'Content-type': 'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(PORT);

console.log("Server Listening on Port 8080....")

