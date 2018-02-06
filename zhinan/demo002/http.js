var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.writeHead('<head><meta charset = "utf-8"/></head>');
	res.end('你好\n');
}).listen(1337,"127.0.0.1");

console.log('Server running at http://10.106.41.15:1337');